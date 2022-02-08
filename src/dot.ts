import { Item, Moved, Quadrant, Ring } from "./radar";
import { Point } from "./coords";
import { DotPositioner } from "./dot-positioner";

export class Dot implements Item {
  ring: Ring;
  quadrant: Quadrant;
  moved: Moved;
  label: string;
  active: boolean;
  position: Point;
  segment: DotPositioner;
  color: string;
  id: string;
  x: number;
  y: number;
  link?: string;

  constructor(entry: Item) {
    this.label = entry.label;
    this.active = entry.active;
    this.ring = entry.ring;
    this.moved = entry.moved;
    this.quadrant = entry.quadrant;
    this.link = entry.link;
  }

  getLabelFirstLetter() {
    return this.label.match(/[a-z]/i);
  }
}
