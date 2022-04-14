<script lang="ts">
  import { Radar } from "../logic/radar.ts";
  import { createEventDispatcher, onMount } from "svelte";
  import type { EntryItem, RadarConfig } from "../logic/radar-config";
  import { Quadrant } from "../logic/radar-config";

  export let rings: RadarConfig["rings"];
  export let quadrants: RadarConfig["quadrants"];
  export let data: EntryItem[];
  export let highlightDot: (label: string) => void;
  export let hideHighlightDot: () => void;
  export let showHighlightQuadrant: (quadrant: Quadrant) => void;
  export let hideHighlightQuadrant: () => void;

  let htmlNode: Element;

  const dispatcher = createEventDispatcher();

  // TODO this onMount causes not reloading radar problem
  onMount(() => {
    const radar = new Radar({
      element: htmlNode,
      width: 800,
      height: 800,
      colors: {
        background: "#F0EEEA",
        grid: "#CECFD2",
        inactive: "#ddd"
      },
      quadrants,
      rings,
      entries: data
    });

    highlightDot = (label: string) => {
      radar.highlightDot(label)
    }

    hideHighlightDot = () => radar.hideHighlightDot()

    showHighlightQuadrant = quadrant => radar.highlightQuadrant(quadrant)
    hideHighlightQuadrant = () => radar.removeQuadrantHighlight()

    radar.onDotMouseOver(
      dot => dispatcher("dot-show-highlight", dot)
    );
    radar.onDotMouseOut(
      dot => dispatcher("dot-hide-highlight", dot)
    );

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
