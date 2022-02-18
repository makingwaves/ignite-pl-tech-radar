<script lang="ts">
  import Legend from "./Legend.svelte";
  import Radar from "./Radar.svelte";
  import type { EntryItem, RadarConfig } from "../logic/radar-config";

  export let rings: RadarConfig["rings"];
  export let quadrants: RadarConfig["quadrants"];
  export let data: EntryItem[];
</script>

<div class="legend">
  <Legend
    on:mouseover={(e) => {
      console.log("mouse over");
      console.log(e.detail);
    }}
    on:mouseout={(e) => {
      console.log("mouse out");
      console.log(e.detail);
    }}
    {data}
    {rings}
    {quadrants}
  />
</div>
<div class="radar">
  <Radar {data} {rings} {quadrants} />
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
