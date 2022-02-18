<script lang="ts">
  import { Legend } from "./legend.ts";
  import { EntryItem, RadarConfig } from "./radar-config";
  import { onMount } from "svelte";

  export let rings: RadarConfig["rings"];
  export let quadrants: RadarConfig["quadrants"];
  export let data: EntryItem[];
  // let htmlNode: HTMLElement;

  // onMount(() => {
  //   const legend = new Legend({
  //     quadrants,
  //     rings,
  //     data: data,
  //     rootElement: htmlNode
  //   });
  //
  //   legend.render();
  //
  //
  //   legend.onMouseOver((entry) => {
  //     // radar.highlightDot(entry.label);
  //   });
  //
  //   legend.onMouseOut(() => {
  //     // radar.hideHighlightDot();
  //   });
  // });

</script>

<ul class="quadrant-list">
  {#each quadrants as quadrant }
    <li class="quadrant-item" data-quadrant-index={quadrant.index}>
      <h2>{quadrant.name}</h2>

      {#each rings as ring}

        <div class="ring-wrapper" data-ring-index="0">
          <h3 class="ring-label">{ring.name}</h3>

          {#each data.filter(entry => {
            return (entry.quadrant === quadrant.index) && entry.ring === ring.index;
          }) as item}
            <span class="entry-item" data-label="React.js">{item.label}</span>
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

    .quadrant-item{
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
    	color: #A4A6A9;
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