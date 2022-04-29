// @ts-nocheck
import type { Point } from "./coords";
import type { DotPositioner } from "./dot-positioner";
import type { EntryItem, Moved, Quadrant, Ring } from "./radar-config";


export class Dot implements EntryItem {
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

  constructor(entry: EntryItem) {
    this.label = entry.label;
    this.active = entry.active;
    this.ring = entry.ring;
    this.moved = entry.moved;
    this.quadrant = entry.quadrant;
    this.link = entry.link;
  }

  getLabelFirstLetter() {
    return this.label.match(/[a-z]/i)[0];
  }
}
