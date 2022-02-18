<script lang="ts">
  import { Legend } from "./legend.ts";
  import { EntryItem, RadarConfig } from "./radar-config";
  import { onMount } from "svelte";

  export let rings: RadarConfig["rings"];
  export let quadrants: RadarConfig["quadrants"];
  export let data: EntryItem[];
  let htmlNode: HTMLElement;

  onMount(() => {
    const legend = new Legend({
      quadrants,
      rings,
      data: data,
      rootElement: htmlNode
    });

    legend.render();


    legend.onMouseOver((entry) => {
      // radar.highlightDot(entry.label);
    });

    legend.onMouseOut(() => {
      // radar.hideHighlightDot();
    });
  });

</script>

<div bind:this={htmlNode}>

</div>