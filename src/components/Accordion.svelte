<script>
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let id = "";
  export let openedAccordion = "NONE";
</script>

<div
  class="collapsible-header"
  on:click={() => dispatch('accordionSelected', id)}
>
  <slot name="title" />
</div>

{#if id === openedAccordion }
  <div class="collapsible-body" transition:slide|local>
    <slot />
  </div>
{/if}

<style>
    .collapsible-body {
        display: block;
    }
</style>
