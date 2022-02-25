<script lang="ts">
  export let size = 800;
  export let bgColor: string;
</script>

<svg style:background-color={bgColor} style:width={size} style:height={size}>
  <g transform="translate({size / 2}, {size / 2})">
    <slot></slot>
  </g>
</svg>
