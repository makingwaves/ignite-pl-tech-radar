<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let position: string;
  export let label: string;
  export let radius = 8;
  export let fillColor: string;

  const dispatcher = createEventDispatcher();
</script>

<g data-entry-label={label} transform={position}
   on:mouseover={() => dispatcher('mouseover')}
   on:mouseout={() => dispatcher('mouseout')}
>
  <circle r={radius} fill={fillColor}></circle>
</g>

<style>

</style>
