<script lang="ts">
  export let size: number;
  export let color: string;
</script>

<g>
  <line stroke-width="1"
        stroke="{color}"
        x1="0"
        y1="-{size/2}"
        x2="0"
        y2="{size / 2}">
  </line>
  <line stroke-width="1"
        stroke="{color}"
        x1="-{size/2}"
        y1="0"
        x2="{size/2}"
        y2="0">
  </line>
</g>