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
    link?: string;
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
    static seed = 42


    random() {
        const x = Math.sin(RandomGenerator.seed++) * 10000;
        return x - Math.floor(x);
    }

    random_between(min, max) {
        return min + this.random() * (max - min);
    }

    normal_between(min, max) {
        return min + (this.random() + this.random()) * 0.5 * (max - min);
    }
}

function polar(cartesian: { x: number; y: number }) {
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

function bounded_ring(polar: { t: number; r: number }, r_min: number, r_max: number) {
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

type Polar = {
    r: number;
    t: number
}

type QuadrantCoords = {
    radial_min: number, radial_max: number, factor_x: number, factor_y: number
}

type RingCoords = {
    radius: number
}

type SegmentedDots = Array<Array<Dot[]>>

class Segment {
    readonly randomGen = new RandomGenerator()

    polarMin: Polar;
    polarMax: Polar;
    cartesianMin: Point;
    cartesianMax: Point;

    constructor(private quadrants: QuadrantCoords[], private rings: RingCoords[], quadrant: 0 | 1 | 2 | 3, ring: 0 | 1 | 2 | 3) {
        this.polarMin = {
            t: this.quadrants[quadrant].radial_min * Math.PI,
            r: ring === 0 ? 30 : this.rings[ring - 1].radius,
        };
        this.polarMax = {
            t: this.quadrants[quadrant].radial_max * Math.PI,
            r: this.rings[ring].radius,
        };
        this.cartesianMin = {
            x: 15 * this.quadrants[quadrant].factor_x,
            y: 15 * this.quadrants[quadrant].factor_y,
        };
        this.cartesianMax = {
            x: this.rings[3].radius * this.quadrants[quadrant].factor_x,
            y: this.rings[3].radius * this.quadrants[quadrant].factor_y,
        };
    }

    clipX = (d: Point) => {
        const c = bounded_box(d, this.cartesianMin, this.cartesianMax);
        const p = bounded_ring(polar(c), this.polarMin.r + 15, this.polarMax.r - 15);
        d.x = cartesian(p).x; // adjust data too!

        return d.x;
    }

    clipY = (d: Point) => {
        const c = bounded_box(d, this.cartesianMin, this.cartesianMax);
        const p = bounded_ring(polar(c), this.polarMin.r + 15, this.polarMax.r - 15);
        d.y = cartesian(p).y; // adjust data too!

        return d.y;
    }
    random = () => {
        return cartesian({
                t: this.randomGen.random_between(this.polarMin.t, this.polarMax.t),
                r: this.randomGen.normal_between(this.polarMin.r, this.polarMax.r),
            }
        );
    }
}

class Dot implements Item {
    ring: Ring;
    quadrant: Quadrant;
    moved: Moved;
    label: string;
    active: boolean;
    position: Point;
    segment: Segment;
    color: string;
    id: string;
    x: number;
    y: number
    link?: string

    constructor(entry: Item) {
        this.label = entry.label;
        this.active = entry.active;
        this.ring = entry.ring;
        this.moved = entry.moved;
        this.quadrant = entry.quadrant;
        this.link = entry.link;
    }
}

const createSegmentedArray = (): SegmentedDots => {
    const dotsArr = () => [] as Dot[]

    return [
        [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
        [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
        [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
        [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
    ]
}

function translate(x, y) {
    return "translate(" + x + "," + y + ")";
}


export class Radar {
    readonly randomGen = new RandomGenerator()
    readonly quadrants: QuadrantCoords[] = [
        {radial_min: 0, radial_max: 0.5, factor_x: 1, factor_y: 1},
        {radial_min: 0.5, radial_max: 1, factor_x: -1, factor_y: 1},
        {radial_min: -1, radial_max: -0.5, factor_x: -1, factor_y: -1},
        {radial_min: -0.5, radial_max: 0, factor_x: 1, factor_y: -1},
    ]
    readonly rings: RingCoords[] = [
        {radius: 130},
        {radius: 220},
        {radius: 310},
        {radius: 400},
    ]
    readonly footer_offset = {x: -675, y: 420} as const;
    /**
     * @deprecated
     */
    readonly legend_offset = [
        {x: 450, y: 90},
        {x: -675, y: 90},
        {x: -675, y: -310},
        {x: 450, y: -310},
    ] as const;

    dots: Dot[]

    constructor(private config: RadarConfig) {
        this.createDots()
    }

    /**
     * @deprecated will not need, legend will be removed
     */
    legend_transform(segments: SegmentedDots, quadrant: number, ring: number, index: null | number = null) {
        var dx = ring < 2 ? 0 : 120;
        var dy = index == null ? -16 : index * 16;
        if (ring % 2 === 1) {
            dy = dy + 48 + segments[quadrant][ring - 1].length * 12;
        }

        return translate(
            this.legend_offset[quadrant].x + dx,
            this.legend_offset[quadrant].y + dy
        );
    }

    createDots() {
        this.dots = this.config.entries.map(entryItem => {
            const dot = new Dot(entryItem);

            dot.segment = new Segment(this.quadrants, this.rings, entryItem.quadrant, entryItem.ring)
            dot.color = entryItem.active || this.config.print_layout
                ? this.config.rings[entryItem.ring].color
                : this.config.colors.inactive;

            const position = dot.segment.random();
            dot.x = position.x;
            dot.y = position.y

            return dot;
        })
    }

    setDotsLabels(segments: SegmentedDots) {
        let id = 1;
        const quadrantsOrdered = [2, 3, 1, 0];

        quadrantsOrdered.forEach(quadrant => {
            for (let ring = 0; ring < 4; ring++) {
                const dotsInSegment = segments[quadrant][ring];

                dotsInSegment.sort(function (a, b) {
                    return a.label.localeCompare(b.label);
                });

                dotsInSegment.forEach((dot) => {
                    dot.id = `${id++}`
                })

            }
        })

    }

    getQuadrantViewbox = (quadrant: number) => {
        return [
            Math.max(0, this.quadrants[quadrant].factor_x * 400) - 420,
            Math.max(0, this.quadrants[quadrant].factor_y * 400) - 420,
            440,
            440,
        ].join(" ");
    }

    createRootElement() {
        return d3
            .select("svg#" + this.config.svg_id)
            .style("background-color", this.config.colors.background)
            .attr("width", this.config.width)
            .attr("height", this.config.height);
    }

    createGrid(radarEl: d3.Selection<SVGElement, unknown, HTMLElement, any>) {
        const gridGroup = radarEl.append('g')

        const verticalLine = gridGroup
            .append("line")
            .attr("x1", 0)
            .attr("y1", -400)
            .attr("x2", 0)
            .attr("y2", 400)
            .style("stroke", this.config.colors.grid)
            .style("stroke-width", 1);

        const horizonalLine = gridGroup
            .append("line")
            .attr("x1", -400)
            .attr("y1", 0)
            .attr("x2", 400)
            .attr("y2", 0)
            .style("stroke", this.config.colors.grid)
            .style("stroke-width", 1);


        return {
            gridGroup, horizonalLine, verticalLine
        }
    }


    drawRings(gridGroup: d3.Selection<SVGElement, unknown, HTMLElement, any>) {
        this.rings.forEach((ring, index) => {
            gridGroup
                .append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", ring.radius)
                .style("fill", "none")
                .style("stroke", this.config.colors.grid)
                .style("stroke-width", 1);

            if (this.config.print_layout) {
                gridGroup
                    .append("text")
                    .text(this.config.rings[index].name) // todo - move ring name to RingCoords and change it to generic Ring
                    .attr("y", -ring.radius + 62)
                    .attr("text-anchor", "middle")
                    .style("fill", "#CECFD2")
                    .style("font-size", "42px")
                    .style("opacity", "0.5")
                    .style("font-weight", "700")
                    .style("pointer-events", "none")
                    .style("user-select", "none");
            }
        })
    }

    render() {
        const segments = createSegmentedArray()

        this.dots.forEach((dot, i) => {
            segments[dot.quadrant][dot.ring].push(dot);
        })

        this.setDotsLabels(segments)

        const rootSvgElement = this.createRootElement()
        const radarGroup = rootSvgElement.append("g");

        if ("zoomed_quadrant" in this.config) {
            rootSvgElement.attr("viewBox", this.getQuadrantViewbox(this.config.zoomed_quadrant));
        } else {
            radarGroup.attr("transform", translate(this.config.width / 2, this.config.height / 2));
        }

        const {gridGroup, horizonalLine, verticalLine} = this.createGrid(radarGroup)


        // remove - this is legend background
        var defs = gridGroup.append("defs");
        var filter = defs
            .append("filter")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", 1)
            .attr("height", 1)
            .attr("id", "solid");
        filter.append("feFlood").attr("flood-color", "#676A6E");
        filter.append("feComposite").attr("in", "SourceGraphic");

        this.drawRings(gridGroup)

        // remove - move to HTML
        // draw title and legend (only in print layout)
        // if (this.config.print_layout) {
        //     // footer
        //     radarGroup
        //         .append("text")
        //         .attr("transform", translate(this.footer_offset.x, this.footer_offset.y))
        //         .text("▲ moved up     ▼ moved down")
        //         .attr("xml:space", "preserve")
        //         .style("font-size", "12px");
        //
        //     // legend
        //     var legend = radarGroup.append("g");
        //     for (var quadrant = 0; quadrant < 4; quadrant++) {
        //         legend
        //             .append("text")
        //             .attr(
        //                 "transform",
        //                 translate(this.legend_offset[quadrant].x, this.legend_offset[quadrant].y - 45)
        //             )
        //             .text(this.config.quadrants[quadrant].name)
        //             .style("font-size", "18px");
        //         for (var ring = 0; ring < 4; ring++) {
        //             legend
        //                 .append("text")
        //                 .attr("transform", this.legend_transform(segments, quadrant, ring))
        //                 .text(this.config.rings[ring].name)
        //                 .style("font-size", "14px")
        //                 .style("font-weight", "700");
        //             legend
        //                 .selectAll(".legend" + quadrant + ring)
        //                 .data(segments[quadrant][ring])
        //                 .enter()
        //                 .append("a")
        //                 .attr("href", function (d, i) {
        //                     return d.link ? d.link : "#"; // stay on same page if no link was provided
        //                 })
        //                 .append("text")
        //                 .attr("transform",  (d, i) => {
        //                     return this.legend_transform(segments, quadrant, ring, i);
        //                 })
        //                 .attr("class", "legend" + quadrant + ring)
        //                 .attr("id", function (d, i) {
        //                     return "legendItem" + d.id;
        //                 })
        //                 .text(function (d, i) {
        //                     return d.id + ". " + d.label;
        //                 })
        //                 .style("font-size", "14px")
        //                 .on("mouseover", function (d) {
        //                     showBubble(d);
        //                     highlightLegendItem(d);
        //                 })
        //                 .on("mouseout", function (d) {
        //                     hideBubble(d);
        //                     unhighlightLegendItem(d);
        //                 });
        //         }
        //     }
        // }

        // layer for entries
        var rink = radarGroup.append("g").attr("id", "rink");

        // rollover bubble (on top of everything else)
        var bubble = radarGroup
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

        const showBubble = (d) => {
            const tooltip = d3.select("#bubble text").text(d.label);
            const bbox = tooltip.node().getBBox();

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

        function hideBubble(d) {
            d3.select("#bubble")
                .attr("transform", translate(0, 0))
                .style("opacity", 0);
        }

        // draw blips on radar
        const blips = rink
            .selectAll(".blip")
            .data(this.dots)
            .enter()
            .append("g")
            .attr("class", "blip")
            .attr("transform", (d, i) => {
                return this.legend_transform(segments, d.quadrant, d.ring, i);
            })
            // todo - run events
            .on("mouseover", function (d) {
                showBubble(d);
                console.log('mouse over')
            })
            .on("mouseout", function (d) {
                hideBubble(d);
                console.log('mouse out')
            });

        const config = this.config

        // this.configure each blip
        blips.each((dot, index, blipsArr) => {
            const blipElement = blipsArr[index];
            let blip: d3.Selection<SVGElement | HTMLAnchorElement, unknown, null, undefined> = d3.select(blipElement);

            if (dot.active && dot.hasOwnProperty("link")) {
                blip = blip.append("a").attr("xlink:href", dot.link).attr('target', '_blank');
            }

            // blip shape
            if (dot.moved > 0) {
                blip
                    .append("path")
                    .attr("d", "M -11,5 11,5 0,-13 z") // triangle pointing up
                    .style("fill", dot.color);
            } else if (dot.moved < 0) {
                blip
                    .append("path")
                    .attr("d", "M -11,-5 11,-5 0,13 z") // triangle pointing down
                    .style("fill", dot.color);
            } else {
                blip.append("circle").attr("r", 9).attr("fill", dot.color);
            }

            if (dot.active) {
                const blip_text = dot.label.match(/[a-z]/i);


                blip
                    .append("text")
                    .text(blip_text[0])
                    .attr("y", 3)
                    .attr("text-anchor", "middle")
                    .style("fill", config.rings[dot.ring].textColor)
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
                return translate(d.segment.clipX(d), d.segment.clipY(d));
            });
        }

        // distribute blips, while avoiding collisions
        d3.forceSimulation()
            .nodes(this.dots)
            .velocityDecay(0.19) // magic number (found by experimentation)
            .force("collision", d3.forceCollide().radius(12).strength(0.85))
            .on("tick", ticked);
    }
}
