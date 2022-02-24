<script lang="ts">
  import type { EntryItem, RadarConfig } from "../logic/radar-config";
  import { createEventDispatcher } from "svelte";

  export let rings: RadarConfig["rings"];
  export let quadrants: RadarConfig["quadrants"];
  export let data: EntryItem[];

  const dispatch = createEventDispatcher();

</script>

<ul class="quadrant-list">
  {#each quadrants as quadrant}
    <li class="quadrant-item" data-quadrant-index={quadrant.index}>
      <h2>{quadrant.name}</h2>

      {#each rings as ring}
        <div
          class="ring-wrapper"
          data-ring-index="0"
          style="border-color: {ring.color}"
        >
          <h3 class="ring-label">{ring.name}</h3>

          {#each data.sort((a, b) => a.label.localeCompare(b.label)).filter((entry) => {
            return entry.quadrant === quadrant.index && entry.ring === ring.index;
          }) as item}
            <span
              on:mouseover={() => dispatch("mouseover", item)}
              on:mouseout={() => dispatch("mouseout", item)}
              class="entry-item"
              data-label="React.js">{item.label}</span
            >
          {/each}
        </div>
      {/each}
    </li>
  {/each}
</ul>

<style>
    .quadrant-list {
        margin: 0;
        padding: 0;
    }

    .quadrant-item {
        margin-bottom: 90px;
    }

    .quadrant-item h2 {
        font-size: 24px;
        font-weight: 700;
    }

    .entry-item {
        display: block;
        line-height: 1.5;
        padding-left: 20px;
        transition: 0.3s;
    }

    .ring-wrapper {
        border-left: 3px solid;
        padding: 10px 0 10px 0px;
        margin: 10px 0;
    }

    .ring-wrapper h3 {
        margin: 0 0 10px 10px;
        color: #a4a6a9;
    }

    .entry-item:hover {
        font-weight: 700;
        transform: translateX(10px);
    }

    li {
        margin: 25px 50px 0 0;
    }

    h3 {
        margin-top: 50px;
    }
</style>
