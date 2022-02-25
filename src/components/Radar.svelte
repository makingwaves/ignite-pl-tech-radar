<script lang="ts">
  import type { EntryItem, RadarConfig } from "../logic/radar-config";
  import RadarArea from "./RadarArea.svelte";
  import RadarGrid from "./RadarGrid.svelte";
  import RadarRings from "./RadarRings.svelte";
  import DotsArea from "./DotsArea.svelte";
  import { Dot } from "../logic/dot";
  import { DotPositioner } from "../logic/dot-positioner";
  import type { QuadrantCoords } from "../logic/coords";

  export let rings: RadarConfig["rings"];
  export let quadrants: RadarConfig["quadrants"];
  export let data: EntryItem[];

  const quadrantsCoords: QuadrantCoords[] = [
    { radial_min: 0, radial_max: 0.5, factor_x: 1, factor_y: 1 },
    { radial_min: 0.5, radial_max: 1, factor_x: -1, factor_y: 1 },
    { radial_min: -1, radial_max: -0.5, factor_x: -1, factor_y: -1 },
    { radial_min: -0.5, radial_max: 0, factor_x: 1, factor_y: -1 },
  ];

  type SegmentedDots = Array<Array<Dot[]>>;

  const createSegmentedArray = (): SegmentedDots => {
    const dotsArr = () => [] as Dot[];

    return [
      [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
      [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
      [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
      [dotsArr(), dotsArr(), dotsArr(), dotsArr()],
    ];
  };

  function setDotsLabels(segments: SegmentedDots) {
    let id = 1;
    const quadrantsOrdered = [2, 3, 1, 0];

    quadrantsOrdered.forEach((quadrant) => {
      for (let ring = 0; ring < 4; ring++) {
        const dotsInSegment = segments[quadrant][ring];

        dotsInSegment.sort(function (a, b) {
          return a.label.localeCompare(b.label);
        });

        dotsInSegment.forEach((dot) => {
          dot.id = `${id++}`;
        });
      }
    });
  }


  const segments = createSegmentedArray();

  const dots = data.map((entryItem) => {
    const dot = new Dot(entryItem);

    dot.segment = new DotPositioner(
      quadrantsCoords,
      rings,
      entryItem.quadrant,
      entryItem.ring
    );
    dot.color = entryItem.active
      ? rings[entryItem.ring].color
      : '#ddd'//todo

    const position = dot.segment.random();
    dot.x = position.x;
    dot.y = position.y;

    return dot;
  });

  dots.forEach((dot, i) => {
    segments[dot.quadrant][dot.ring].push(dot);
  });

  setDotsLabels(segments);
</script>

<RadarArea>
  <RadarGrid color="#ccc" size="800" />
  <RadarRings ringLabelColor="red" ringLineColor="blue" rings="{rings}" />
  <DotsArea dots="{dots}"/>
</RadarArea>