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
</script>

<div class="legend">
  <Legend
    {data}
    {rings}
    {quadrants}
  />
</div>
<div class="radar">
  <Radar rings="{rings}" data={data} quadrants="{quadrants}"/>
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
