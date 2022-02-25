<script lang="ts">
  import DotComponent from "./Dot.svelte";
  import { Dot } from "../logic/dot";

  export let dots: Dot[];

  function translate(x: number, y: number) {
    return "translate(" + x + "," + y + ")";
  }
</script>

<g>
  {#each dots as dot}
    <DotComponent label="{dot.name}" fillColor="{dot.color}" position="{translate(dot.segment.clipX(dot), dot.segment.clipY(dot))}" />
  {/each}
</g>
