<script>
  import RadarWithLegend from "../components/RadarWithLegend.svelte";
  import { onMount } from "svelte";
  import client from "../data/sanityClient.js";
  import { page } from "$app/stores";

  let radar;
  let technologies = [];
  const query = "*[_type == \"technology\"]{name,path,description,radar->{entries[]->{label, link, moved, quadrant, ring, active, description}, quadrants, rings}}";
  onMount(() => {
    client.fetch(query).then(technology => {
      technologies = technology;
    });
  });

  $: radar = technologies.find(item => item.path === $page.url.pathname)?.radar;
</script>

{#if !radar}
  Loading...
{:else}
  <RadarWithLegend
    data={radar.entries}
    quadrants={radar.quadrants}
    rings={radar.rings}
  />
{/if}
<div>
  dupa
</div>