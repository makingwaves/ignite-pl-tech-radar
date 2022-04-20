<script lang="ts">
  import type { RadarConfig } from "../logic/radar-config";
  import PortableText from "@portabletext/svelte";

  export let rings: RadarConfig["rings"];
  export let description: string;
  export let rightColumn: string;
</script>

<div class="wrapper">
  <div class="left-column">
    <h3>What is the Tech Radar?</h3>
    <p>
      {description}
    <ul>
      {#each rings || [] as ring}
        {#if ring?.description && !!ring.description.length }
          <li>
            <strong>{ring.name}</strong> - {ring.description}
          </li>
        {/if}
      {/each}
    </ul>
  </div>
  <div class="right-column">
    <PortableText blocks={rightColumn} />
  </div>
</div>

<style>
    .wrapper {
        grid-column: 1/4;
        padding-top: 60px;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-gap: 60px;
    }

    .right-column {
        grid-column: 2/2;
    }

    .left-column {
        grid-column: 1/2;
    }
</style>