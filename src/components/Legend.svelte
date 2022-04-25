<script lang="ts">
  import type { EntryItem, RadarConfig } from "../logic/radar-config";
  import { createEventDispatcher } from "svelte";
  import Accordion from "./Accordion.svelte";
  import Accordions from "./Accordions.svelte";

  export let rings: RadarConfig["rings"];
  export let quadrants: RadarConfig["quadrants"];
  export let data: EntryItem[];

  const dispatch = createEventDispatcher();

  let openedAccordion = "NONE";
  const toggleAccordion = (e: CustomEvent<string>) => (openedAccordion = e.detail === openedAccordion ? "NONE" : e.detail);
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
          <Accordions>
            {#each data.sort((a, b) => a.label.localeCompare(b.label)).filter((entry) => {
              return entry.quadrant === quadrant.index && entry.ring === ring.index;
            }) as item}
              <Accordion
                id={item.label}
                {openedAccordion}
                on:accordionSelected={toggleAccordion}
              >
              <span
                slot="title"
                class="entry-item"
                style={openedAccordion === item.label ? 'font-weight: 700' : ''}
                on:mouseover={() => dispatch("mouseover", item)}
                on:mouseout={() => dispatch("mouseout", item)}
                data-label={item.label}>
                  {item.label}
              </span>

                {#if item.description}
                  <hr style="margin-left: 20px; border-top: 1px solid #a4a6a9">

                  <p
                    class="entry-description"
                  >
                    {item.description || ''}

                    {#if item.link}
                      <br>
                      <a class="link" href={item.link} target="_blank">See more ></a>
                    {/if}
                  </p>
                {/if}

              </Accordion>
            {/each}
          </Accordions>
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
        cursor: pointer;
    }

    .entry-description {
        display: block;
        padding-left: 20px;
        transition: 0.3s;
        color: #49586E;
        font-size: 14px;
    }

    .ring-wrapper {
        border-left: 3px solid;
        padding: 10px 0 10px 0;
        margin: 10px 0;
    }

    .link {
        color: #49586E;
        font-weight: 700;
        padding: 8px 0;
        float: right;
        text-decoration: none;
    }

    .link:active, .link:hover {
        color: #eb4646;
        transform: translateX(2px);
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
