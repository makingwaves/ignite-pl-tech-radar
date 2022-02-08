// The MIT License (MIT)

// Copyright (c) 2017 Zalando SE

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import * as d3 from 'd3'

type QuadrantConfig = {
    name: string
}

type RingConfig = { name: string, color: string, textColor: string };

export type Item = {
    quadrant: Quadrant;
    ring: Ring;
    label: string;
    active: boolean;
    moved: Moved;
};

export enum Quadrant {
    BottomRight = 0,
    BottomLeft = 1,
    TopLeft = 2,
    TopRight = 3,
}

export enum Moved {
    None = 0,
    In = 1,
    Out = -1,
}

export enum Ring {
    Adopt = 0,
    Trial = 1,
    Assess = 2,
    Hold = 3,
}

export type RadarConfig = {
    svg_id: string,
    width: number;
    height: number;
    colors: {
        background: string;
        grid: string;
        inactive: string;
    },
    quadrants: [
        QuadrantConfig, QuadrantConfig, QuadrantConfig, QuadrantConfig
    ],
    rings: [RingConfig, RingConfig, RingConfig, RingConfig],
    entries: Item[],
    /**
     * @deprecated
     */
    print_layout: boolean
    zoomed_quadrant?: number
};

type Point = {
    x: number;
    y: number
}

class RandomGenerator {
    // source: https://stackoverflow.com/questions/521295
    constructor(private seed = 42) {
    }

    random() {
        const x = Math.sin(this.seed++) * 10000;
        return x - Math.floor(x);
    }

    random_between(min, max) {
        return min + this.random() * (max - min);
    }

    normal_between(min, max) {
        return min + (this.random() + this.random()) * 0.5 * (max - min);
    }
}

function polar(cartesian: {x: number; y: number}) {
    const x = cartesian.x;
    const y = cartesian.y;

    return {
        t: Math.atan2(y, x),
        r: Math.sqrt(x * x + y * y),
    };
}

function cartesian(polar: {
    r: number;
    t: number;
}) {
    return {
        x: polar.r * Math.cos(polar.t),
        y: polar.r * Math.sin(polar.t),
    };
}

function bounded_interval(value: number, min: number, max: number) {
    const low = Math.min(min, max);
    const high = Math.max(min, max);

    return Math.min(Math.max(value, low), high);
}

function bounded_ring(polar: {t: number; r: number}, r_min: number, r_max: number) {
    return {
        t: polar.t,
        r: bounded_interval(polar.r, r_min, r_max),
    };
}

function bounded_box(point: Point, min: Point, max: Point) {
    return {
        x: bounded_interval(point.x, min.x, max.x),
        y: bounded_interval(point.y, min.y, max.y),
    };
}

export class Radar {
    constructor(private config: RadarConfig) {
    }

    render() {
        const randomGen = new RandomGenerator()

        // radial_min / radial_max are multiples of PI
        const quadrants = [
            {radial_min: 0, radial_max: 0.5, factor_x: 1, factor_y: 1},
            {radial_min: 0.5, radial_max: 1, factor_x: -1, factor_y: 1},
            {radial_min: -1, radial_max: -0.5, factor_x: -1, factor_y: -1},
            {radial_min: -0.5, radial_max: 0, factor_x: 1, factor_y: -1},
        ];

        const rings = [
            {radius: 130},
            {radius: 220},
            {radius: 310},
            {radius: 400},
        ];

        const footer_offset = {x: -675, y: 420};

        const legend_offset = [
            {x: 450, y: 90},
            {x: -675, y: 90},
            {x: -675, y: -310},
            {x: 450, y: -310},
        ];

        const segment = (quadrant, ring) => {
            var polar_min = {
                t: quadrants[quadrant].radial_min * Math.PI,
                r: ring === 0 ? 30 : rings[ring - 1].radius,
            };
            var polar_max = {
                t: quadrants[quadrant].radial_max * Math.PI,
                r: rings[ring].radius,
            };
            var cartesian_min = {
                x: 15 * quadrants[quadrant].factor_x,
                y: 15 * quadrants[quadrant].factor_y,
            };
            var cartesian_max = {
                x: rings[3].radius * quadrants[quadrant].factor_x,
                y: rings[3].radius * quadrants[quadrant].factor_y,
            };
            return {
                clipx: function (d) {
                    var c = bounded_box(d, cartesian_min, cartesian_max);
                    var p = bounded_ring(polar(c), polar_min.r + 15, polar_max.r - 15);
                    d.x = cartesian(p).x; // adjust data too!
                    return d.x;
                },
                clipy: function (d) {
                    var c = bounded_box(d, cartesian_min, cartesian_max);
                    var p = bounded_ring(polar(c), polar_min.r + 15, polar_max.r - 15);
                    d.y = cartesian(p).y; // adjust data too!
                    return d.y;
                },
                random: function () {
                    return cartesian({
                        t: randomGen.random_between(polar_min.t, polar_max.t),
                        r:randomGen.normal_between(polar_min.r, polar_max.r),
                    });
                },
            };
        }

        // position each entry randomly in its segment
        for (var i = 0; i < this.config.entries.length; i++) {
            var entry = this.config.entries[i];
            entry.segment = segment(entry.quadrant, entry.ring);
            var point = entry.segment.random();
            entry.x = point.x;
            entry.y = point.y;
            entry.color =
                entry.active || this.config.print_layout
                    ? this.config.rings[entry.ring].color
                    : this.config.colors.inactive;
        }

        // partition entries according to segments
        var segmented = new Array(4);
        for (var quadrant = 0; quadrant < 4; quadrant++) {
            segmented[quadrant] = new Array(4);
            for (var ring = 0; ring < 4; ring++) {
                segmented[quadrant][ring] = [];
            }
        }
        for (var i = 0; i < this.config.entries.length; i++) {
            var entry = this.config.entries[i];
            segmented[entry.quadrant][entry.ring].push(entry);
        }

        // assign unique sequential id to each entry
        var id = 1;
        for (var quadrant of [2, 3, 1, 0]) {
            for (var ring = 0; ring < 4; ring++) {
                var entries = segmented[quadrant][ring];
                entries.sort(function (a, b) {
                    return a.label.localeCompare(b.label);
                });
                for (var i = 0; i < entries.length; i++) {
                    entries[i].id = "" + id++;
                }
            }
        }

        function translate(x, y) {
            return "translate(" + x + "," + y + ")";
        }

        function viewbox(quadrant) {
            return [
                Math.max(0, quadrants[quadrant].factor_x * 400) - 420,
                Math.max(0, quadrants[quadrant].factor_y * 400) - 420,
                440,
                440,
            ].join(" ");
        }

        var svg = d3
            .select("svg#" + this.config.svg_id)
            .style("background-color", this.config.colors.background)
            .attr("width", this.config.width)
            .attr("height", this.config.height);

        var radar = svg.append("g");
        if ("zoomed_quadrant" in this.config) {
            svg.attr("viewBox", viewbox(this.config.zoomed_quadrant));
        } else {
            radar.attr("transform", translate(this.config.width / 2, this.config.height / 2));
        }

        var grid = radar.append("g");

        // draw grid lines
        grid
            .append("line")
            .attr("x1", 0)
            .attr("y1", -400)
            .attr("x2", 0)
            .attr("y2", 400)
            .style("stroke", this.config.colors.grid)
            .style("stroke-width", 1);
        grid
            .append("line")
            .attr("x1", -400)
            .attr("y1", 0)
            .attr("x2", 400)
            .attr("y2", 0)
            .style("stroke", this.config.colors.grid)
            .style("stroke-width", 1);

        // background color. Usage `.attr("filter", "url(#solid)")`
        // SOURCE: https://stackoverflow.com/a/31013492/2609980
        var defs = grid.append("defs");
        var filter = defs
            .append("filter")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 1)
            .attr("height", 1)
            .attr("id", "solid");
        filter.append("feFlood").attr("flood-color", "#676A6E");
        filter.append("feComposite").attr("in", "SourceGraphic");

        // draw rings
        for (var i = 0; i < rings.length; i++) {
            grid
                .append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", rings[i].radius)
                .style("fill", "none")
                .style("stroke", this.config.colors.grid)
                .style("stroke-width", 1);
            if (this.config.print_layout) {
                grid
                    .append("text")
                    .text(this.config.rings[i].name)
                    .attr("y", -rings[i].radius + 62)
                    .attr("text-anchor", "middle")
                    .style("fill", "#CECFD2")
                    .style("font-size", "42px")
                    .style("opacity", "0.5")
                    .style("font-weight", "700")
                    .style("pointer-events", "none")
                    .style("user-select", "none");
            }
        }

        function legend_transform(quadrant, ring, index = null) {
            var dx = ring < 2 ? 0 : 120;
            var dy = index == null ? -16 : index * 16;
            if (ring % 2 === 1) {
                dy = dy + 48 + segmented[quadrant][ring - 1].length * 12;
            }
            return translate(
                legend_offset[quadrant].x + dx,
                legend_offset[quadrant].y + dy
            );
        }

        // draw title and legend (only in print layout)
        if (this.config.print_layout) {
            // footer
            radar
                .append("text")
                .attr("transform", translate(footer_offset.x, footer_offset.y))
                .text("▲ moved up     ▼ moved down")
                .attr("xml:space", "preserve")
                .style("font-size", "12px");

            // legend
            var legend = radar.append("g");
            for (var quadrant = 0; quadrant < 4; quadrant++) {
                legend
                    .append("text")
                    .attr(
                        "transform",
                        translate(legend_offset[quadrant].x, legend_offset[quadrant].y - 45)
                    )
                    .text(this.config.quadrants[quadrant].name)
                    .style("font-size", "18px");
                for (var ring = 0; ring < 4; ring++) {
                    legend
                        .append("text")
                        .attr("transform", legend_transform(quadrant, ring))
                        .text(this.config.rings[ring].name)
                        .style("font-size", "14px")
                        .style("font-weight", "700");
                    legend
                        .selectAll(".legend" + quadrant + ring)
                        .data(segmented[quadrant][ring])
                        .enter()
                        .append("a")
                        .attr("href", function (d, i) {
                            return d.link ? d.link : "#"; // stay on same page if no link was provided
                        })
                        .append("text")
                        .attr("transform", function (d, i) {
                            return legend_transform(quadrant, ring, i);
                        })
                        .attr("class", "legend" + quadrant + ring)
                        .attr("id", function (d, i) {
                            return "legendItem" + d.id;
                        })
                        .text(function (d, i) {
                            return d.id + ". " + d.label;
                        })
                        .style("font-size", "14px")
                        .on("mouseover", function (d) {
                            showBubble(d);
                            highlightLegendItem(d);
                        })
                        .on("mouseout", function (d) {
                            hideBubble(d);
                            unhighlightLegendItem(d);
                        });
                }
            }
        }

        // layer for entries
        var rink = radar.append("g").attr("id", "rink");

        // rollover bubble (on top of everything else)
        var bubble = radar
            .append("g")
            .attr("id", "bubble")
            .attr("x", 0)
            .attr("y", 0)
            .style("opacity", 0)
            .style("pointer-events", "none")
            .style("user-select", "none");
        bubble.append("rect").attr("rx", 4).attr("ry", 4).style("fill", "#676A6E");
        bubble.append("text").style("font-size", "10px").style("fill", "#F0EEEA");
        bubble.append("path").attr("d", "M 0,0 10,0 5,8 z").style("fill", "#676A6E");

        const  showBubble= (d)=> {
            if (d.active || this.config.print_layout) {
                var tooltip = d3.select("#bubble text").text(d.label);
                var bbox = tooltip.node().getBBox();
                d3.select("#bubble")
                    .attr("transform", translate(d.x - bbox.width / 2, d.y - 16))
                    .style("opacity", 0.8);
                d3.select("#bubble rect")
                    .attr("x", -5)
                    .attr("y", -bbox.height)
                    .attr("width", bbox.width + 10)
                    .attr("height", bbox.height + 4);
                d3.select("#bubble path").attr(
                    "transform",
                    translate(bbox.width / 2 - 5, 3)
                );
            }
        }

        function hideBubble(d) {
            var bubble = d3
                .select("#bubble")
                .attr("transform", translate(0, 0))
                .style("opacity", 0);
        }

        function highlightLegendItem(d) {
            var legendItem = document.getElementById("legendItem" + d.id);
            legendItem.setAttribute("filter", "url(#solid)");
            legendItem.setAttribute("fill", "#F0EEEA");
        }

        function unhighlightLegendItem(d) {
            var legendItem = document.getElementById("legendItem" + d.id);
            legendItem.removeAttribute("filter");
            legendItem.removeAttribute("fill");
        }

        // draw blips on radar
        var blips = rink
            .selectAll(".blip")
            .data(this.config.entries)
            .enter()
            .append("g")
            .attr("class", "blip")
            .attr("transform", function (d, i) {
                return legend_transform(d.quadrant, d.ring, i);
            })
            .on("mouseover", function (d) {
                showBubble(d);
                highlightLegendItem(d);
            })
            .on("mouseout", function (d) {
                hideBubble(d);
                unhighlightLegendItem(d);
            });

        const config = this.config

        // this.configure each blip
        blips.each( function(d) {
            var blip = d3.select(this);

            // blip link
            if (!config.print_layout && d.active && d.hasOwnProperty("link")) {
                blip = blip.append("a").attr("xlink:href", d.link);
            }

            // blip shape
            if (d.moved > 0) {
                blip
                    .append("path")
                    .attr("d", "M -11,5 11,5 0,-13 z") // triangle pointing up
                    .style("fill", d.color);
            } else if (d.moved < 0) {
                blip
                    .append("path")
                    .attr("d", "M -11,-5 11,-5 0,13 z") // triangle pointing down
                    .style("fill", d.color);
            } else {
                blip.append("circle").attr("r", 9).attr("fill", d.color);
            }

            // blip text
            if (d.active || config.print_layout) {
                var blip_text = config.print_layout ? d.id : d.label.match(/[a-z]/i);
                blip
                    .append("text")
                    .text(blip_text)
                    .attr("y", 3)
                    .attr("text-anchor", "middle")
                    .style("fill", config.rings[d.ring].textColor)
                    .style("font-size", function (d) {
                        return blip_text.length > 2 ? "9px" : "11px";
                    })
                    .style("pointer-events", "none")
                    .style("user-select", "none");
            }
        });

        // make sure that blips stay inside their segment
        function ticked() {
            blips.attr("transform", function (d) {
                return translate(d.segment.clipx(d), d.segment.clipy(d));
            });
        }

        // distribute blips, while avoiding collisions
        d3.forceSimulation()
            .nodes(this.config.entries)
            .velocityDecay(0.19) // magic number (found by experimentation)
            .force("collision", d3.forceCollide().radius(12).strength(0.85))
            .on("tick", ticked);
    }
}
