<script>
  import RadarWithLegend from "../components/RadarWithLegend.svelte";
  import { CompanyData } from "../data/company-data";
</script>

<RadarWithLegend data={CompanyData.items} quadrants={CompanyData.quadrants} rings={CompanyData.rings} />