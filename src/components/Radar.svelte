<script lang="ts">
  import { Radar } from "../logic/radar.ts";
  import { onMount } from "svelte";
  import type { EntryItem, RadarConfig } from "../logic/radar-config";

  export let rings: RadarConfig["rings"];
  export let quadrants: RadarConfig["quadrants"];
  export let data: EntryItem[];
  let htmlNode: Element;

  onMount(() => {
    const radar = new Radar({
      element: htmlNode,
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

    // const legend = new Legend({
    //   quadrants,
    //   rings,
    //   data: data,
    //   rootElement: document.querySelector("#company-legend")
    // });

    // legend.render();
    //
    // radar.onDotMouseOver((dot) => legend.highlightByLabel(dot.label));
    // radar.onDotMouseOut((dot) => legend.removeHighlightByLabel(dot.label));
    //
    radar.render();
    //
    // legend.onMouseOver((entry) => {
    //   radar.highlightDot(entry.label);
    // });
    //
    // legend.onMouseOut(() => {
    //   radar.hideHighlightDot();
    // });
  });
</script>

<svg bind:this={htmlNode} />
