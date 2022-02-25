<script lang="ts">
  import Legend from "./Legend.svelte";
  import Radar from "./Radar.svelte";
  import type { EntryItem, RadarConfig } from "../logic/radar-config";
  import Dot from "./Dot.svelte";
  import RadarGrid from "./RadarGrid.svelte";
  import { Quadrant } from "../logic/radar-config";
  import RadarArea from "./RadarArea.svelte";
  import RadarRings from "./RadarRings.svelte";

  export let rings: RadarConfig["rings"];
  export let quadrants: RadarConfig["quadrants"];
  export let data: EntryItem[];

  let radar = null;

  const onRadarDotHighlightShow = (event: CustomEvent<Dot>) => {
    console.log(event.detail);
  };

  const onRadarDotHighlightHide = (event: CustomEvent<Dot>) => {
    console.log(event.detail);
  };

  const onLegendItemMouseOver = (event: CustomEvent<{ label: string, quadrant: Quadrant }>) => {
    radar.hideHighlightQuadrant();
    radar.highlightDot(event.detail.label);
    radar.showHighlightQuadrant(event.detail.quadrant);
  };

  const onLegendItemMouseOut = (event: CustomEvent<unknown>) => {
    radar.hideHighlightDot();
    radar.hideHighlightQuadrant();
  };
</script>

<div class="legend">
  <Legend
    on:mouseover={onLegendItemMouseOver}
    on:mouseout={onLegendItemMouseOut}
    {data}
    {rings}
    {quadrants}
  />
</div>
<div class="radar">
  <RadarArea>
    <RadarGrid color="#ccc" size="800" />
    <RadarRings ringLabelColor="red" ringLineColor="blue" rings="{rings}" />
  </RadarArea>
</div>

<style>
    .radar {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .legend {
        margin-right: 20px;
        height: calc(100vh - 200px);
        overflow: auto;
    }
</style>
