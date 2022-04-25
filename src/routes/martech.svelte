<script>
  import RadarWithLegend from "../components/RadarWithLegend.svelte";
  import { MartechData } from "../data/martech-data";
  import RadarDescription from "../components/RadarDescription.svelte";
</script>

{#if import.meta.env.VITE_DISABLED_ROUTES.split(",").includes('/martech')}
  <div>
    <h1>Not available</h1>
    <p>Martech radar is not yet available, please try again in near future. Select available radars from side panel.</p>
  </div>
{:else}
  <RadarWithLegend
    data={MartechData.items}
    quadrants={MartechData.quadrants}
    rings={MartechData.rings}
  />
  <RadarDescription />
{/if}
