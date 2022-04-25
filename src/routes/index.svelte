<script>
  import RadarWithLegend from "../components/RadarWithLegend.svelte";
  import { CompanyData } from "../data/company-data";
  import RadarDescription from "../components/RadarDescription.svelte";
</script>

<RadarWithLegend
  data={CompanyData.items}
  quadrants={CompanyData.quadrants}
  rings={CompanyData.rings}
/>

<RadarDescription />