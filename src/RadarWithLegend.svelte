<script lang="ts">
  import Legend from "./Legend.svelte";
  import Radar from "./Radar.svelte";
  import { EntryItem, RadarConfig } from "./radar-config";

  export let rings: RadarConfig["rings"];
  export let quadrants: RadarConfig["quadrants"];
  export let data: EntryItem[];
</script>

<div class="legend">
  <Legend data={data} rings={rings} quadrants={quadrants} />
</div>
<div class="radar">
  <Radar data={data} rings={rings} quadrants={quadrants} />
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