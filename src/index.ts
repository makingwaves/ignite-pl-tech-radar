import { data, quadrants, rings } from "./data";
import { Radar } from "./radar";
import { RadarConfig } from "./radar-config";
import { Legend } from "./legend";

const radar = new Radar({
  svg_id: "radar",
  width: 800,
  height: 800,
  colors: {
    background: "#F0EEEA",
    grid: "#CECFD2",
    inactive: "#ddd",
  },
  quadrants,
  rings,
  entries: data,
});

const legend = new Legend({
  quadrants,
  rings,
  data,
  rootElement: document.querySelector("#legend"),
});

legend.render();

radar.onDotMouseOver((dot) => legend.highlightByLabel(dot.label));
radar.onDotMouseOut((dot) => legend.removeHighlightByLabel(dot.label));

radar.render();

legend.onMouseOver((entry) => {
  radar.highlightDot(entry.label);
});
