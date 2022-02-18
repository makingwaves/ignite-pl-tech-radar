<script>
  import RadarWithLegend from "../components/RadarWithLegend.svelte";
  import { MartechData } from "../data/martech-data";
</script>

<RadarWithLegend data={MartechData.items} quadrants={MartechData.quadrants} rings={MartechData.rings} />