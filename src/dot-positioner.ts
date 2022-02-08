import { RandomGenerator } from "./random-generator";
import { Point, Polar, QuadrantCoords, RingCoords } from "./coords";

export class DotPositioner {
  readonly randomGen = new RandomGenerator();

  polarMin: Polar;
  polarMax: Polar;
  cartesianMin: Point;
  cartesianMax: Point;

  constructor(
    private quadrants: QuadrantCoords[],
    private rings: RingCoords[],
    quadrant: 0 | 1 | 2 | 3,
    ring: 0 | 1 | 2 | 3
  ) {
    this.polarMin = {
      t: this.quadrants[quadrant].radial_min * Math.PI,
      r: ring === 0 ? 30 : this.rings[ring - 1].radius,
    };
    this.polarMax = {
      t: this.quadrants[quadrant].radial_max * Math.PI,
      r: this.rings[ring].radius,
    };
    this.cartesianMin = {
      x: 15 * this.quadrants[quadrant].factor_x,
      y: 15 * this.quadrants[quadrant].factor_y,
    };
    this.cartesianMax = {
      x: this.rings[3].radius * this.quadrants[quadrant].factor_x,
      y: this.rings[3].radius * this.quadrants[quadrant].factor_y,
    };
  }

  clipX = (d: Point) => {
    const c = this.bounded_box(d, this.cartesianMin, this.cartesianMax);
    const p = this.bounded_ring(
      this.polar(c),
      this.polarMin.r + 15,
      this.polarMax.r - 15
    );
    d.x = this.cartesian(p).x;

    return d.x;
  };
  clipY = (d: Point) => {
    const c = this.bounded_box(d, this.cartesianMin, this.cartesianMax);
    const p = this.bounded_ring(
      this.polar(c),
      this.polarMin.r + 15,
      this.polarMax.r - 15
    );
    d.y = this.cartesian(p).y;

    return d.y;
  };
  random = () => {
    return this.cartesian({
      t: this.randomGen.random_between(this.polarMin.t, this.polarMax.t),
      r: this.randomGen.normal_between(this.polarMin.r, this.polarMax.r),
    });
  };

  private bounded_ring(
    polar: { t: number; r: number },
    r_min: number,
    r_max: number
  ) {
    return {
      t: polar.t,
      r: this.bounded_interval(polar.r, r_min, r_max),
    };
  }

  private bounded_box(point: Point, min: Point, max: Point) {
    return {
      x: this.bounded_interval(point.x, min.x, max.x),
      y: this.bounded_interval(point.y, min.y, max.y),
    };
  }

  private polar(cartesian: { x: number; y: number }) {
    const x = cartesian.x;
    const y = cartesian.y;

    return {
      t: Math.atan2(y, x),
      r: Math.sqrt(x * x + y * y),
    };
  }

  private cartesian(polar: { r: number; t: number }) {
    return {
      x: polar.r * Math.cos(polar.t),
      y: polar.r * Math.sin(polar.t),
    };
  }

  private bounded_interval(value: number, min: number, max: number) {
    const low = Math.min(min, max);
    const high = Math.max(min, max);

    return Math.min(Math.max(value, low), high);
  }
}
