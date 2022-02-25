<script lang="ts">
  import type { RingConfig } from "../logic/radar-config";

  // todo - calculate from size
  export let rings: RingConfig[];
  export let ringLineColor: string;
  export let ringLabelColor: string;
</script>

<g>
  {#each rings as theRing}
    <circle cx="0"
            cy="0"
            r="{theRing.radius - 1}"
            fill="none"
            stroke="{ringLineColor}"
            stroke-width="1">

    </circle>
    <text y="{-theRing.radius + 62}"
          text-anchor="middle"
          fill="{ringLabelColor}"
          font-size="42px"
          opacity="0.5"
          font-weight="700"
          pointer-events="none"
    >
      {theRing.name}
    </text>
  {/each}
</g>