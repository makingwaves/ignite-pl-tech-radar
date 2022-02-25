import * as d3 from "d3";

export class Radar {
  private showBubble(d: Dot) {
    const tooltip = d3.select("#bubble text").text(d.label);
    const bbox = (tooltip.node() as SVGGraphicsElement).getBBox();

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

  private hideBubble() {
    d3.select("#bubble").attr("transform", translate(0, 0)).style("opacity", 0);
  }

  private renderQuarterHighlight(
    svgRoot: d3.Selection<Element, unknown, null, undefined>,
    quadrant: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  ) {
    this.elements.quadrantHighlight = svgRoot.append("path");

    let centerX: number;
    let centerY: number;
    let rotateAngle = 0;
    let transformOrigin: string;

    const majorRadius = 400 - 1;
    const minorRadius = 400 - 1;

    switch (quadrant) {
      case "top-right":
        centerY = 0;
        centerX = 400;
        rotateAngle = 270;
        transformOrigin = "600 200";
        break;
      case "top-left":
        centerY = 0;
        centerX = 0;
        rotateAngle = -180;
        transformOrigin = "200 200";
        break;
      case "bottom-right":
        centerY = 400;
        centerX = 400;
        rotateAngle = 0;
        transformOrigin = "200 600";
        break;
      case "bottom-left":
        centerY = 400;
        centerX = 0;
        rotateAngle = 90;
        transformOrigin = "200 600";
        break;
    }

    // todo draw quarter instead only edge, animate it around
    this.elements.quadrantHighlight
      .attr(
        "d",
        `
          M  ${
            centerX + majorRadius
          }   ${centerY}  A  ${majorRadius} ${minorRadius} 0 0 1 ${centerX} ${
          centerY + minorRadius
        }
      `
      )
      .attr("id", "quarter-highlight")
      .style("stroke", "#EB4646")
      .style("fill", "none")
      .attr("transform-origin", transformOrigin)
      .style("transform", `rotate(${rotateAngle}deg)`);
  }

  render() {
    const bubble = radarGroup
      .append("g")
      .attr("id", "bubble")
      .attr("x", 0)
      .attr("y", 0)
      .style("opacity", 0)
      .style("pointer-events", "none")
      .style("user-select", "none");

    bubble
      .append("rect")
      .attr("rx", 4)
      .attr("ry", 4)
      .style("fill", "#313131")
      .attr("text-anchor", "middle");

    bubble.append("text").style("font-size", "15px").style("fill", "#F0EEEA");

    bubble
      .append("path")
      .attr("d", "M 0,0 10,0 5,8 z")
      .style("fill", "#313131");

    // draw blips on radar
    const blips = rink
      .selectAll(".blip")
      .data(this.dots)
      .enter()
      .append("g")
      .attr("class", "blip")
      .attr("data-entry-label", (d) => d.label)
      .on("mouseover", (dot: Dot) => {
        this.eventHandlers.onDotMouseOver(dot);
        this.showBubble(dot);
      })
      .on("mouseout", (dot: Dot) => {
        this.hideBubble();
        this.eventHandlers.onDotMouseOut(dot);
      });

    const config = this.config;

    // this.configure each blip
    blips.each((dot, index, blipsArr) => {
      const blipElement = blipsArr[index];
      let blip: d3.Selection<
        SVGElement | HTMLAnchorElement,
        unknown,
        null,
        undefined
      > = d3.select(blipElement);

      if (dot.active && dot.hasOwnProperty("link")) {
        blip = blip
          .append("a")
          .attr("xlink:href", dot.link)
          .attr("target", "_blank");
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
        blip.append("circle").attr("r", 8).attr("fill", dot.color);
      }

      // show labels on dots?
      if (config.showDotInitials) {
        const label = dot.getLabelFirstLetter();

        blip
          .append("text")
          .text(label)
          .attr("y", 3)
          .attr("text-anchor", "middle")
          .style("fill", config.rings[dot.ring].textColor)
          .style("font-size", "12px")
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
      .force("collision", d3.forceCollide().radius(14).strength(0.85))
      .on("tick", ticked);
  }
}
