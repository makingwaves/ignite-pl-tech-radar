<script>
  import RadarWithLegend from "../components/RadarWithLegend.svelte";
  import DescriptionSection from "../components/DescriptionSection.svelte";
  import { onMount } from "svelte";
  import client from "../data/sanityClient.js";
  import { page } from "$app/stores";

  let currTechnology;
  let isLoading = true;
  let technologies = [];
  const query = "*[_type == \"radar\" && isPublished]{description,entries[]->{'link': technology->link, 'active': technology->active, 'description': technology->description,'label': technology->label, moved, name, quadrant, ring}," +
    "isPublished,'path': path.current,quadrants[],rightColumn,rings,title}";
  onMount(() => {
    client.fetch(query).then(technology => {
      technologies = technology;
    }).finally(() => {
      isLoading = false;
    });
  });

  $: currTechnology = technologies.find(item => {
    return item.path === $page.url.pathname;
  });
</script>

{#if !currTechnology}
  {#if isLoading}
  Loading...
    {:else}
    Wrong path, select technology from left panel.
  {/if}
{:else}
  <RadarWithLegend
    data={currTechnology.entries}
    quadrants={currTechnology.quadrants}
    rings={currTechnology.rings}
  />

  <DescriptionSection
    rings={currTechnology.rings}
    description={currTechnology.description}
    rightColumn={currTechnology.rightColumn}
  />
{/if}
