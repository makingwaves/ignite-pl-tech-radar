import {Quadrant} from "../enum/Quadrant.enum";
import {Ring} from "../enum/Ring.enum";
import {Moved} from "../enum/Moved.enum";

export type QuadrantConfig = {
  name: string;
  index: Quadrant;
};

export type RingConfig = {
  name: string;
  color: string;
  textColor: string;
  index: Ring;
};

export type EntryItem = {
  quadrant: Quadrant;
  ring: Ring;
  label: string;
  active?: boolean;
  moved: Moved;
  link?: string;
  description?: string;
};

export type EntryItemWithoutQuadrant = Omit<EntryItem, "quadrant">;


export type RadarConfig = {
  showDotInitials?: boolean;
  element: Element;
  width: number;
  height: number;
  colors: {
    background: string;
    grid: string;
    inactive: string;
  };
  quadrants: [QuadrantConfig, QuadrantConfig, QuadrantConfig, QuadrantConfig];
  rings: [RingConfig, RingConfig, RingConfig, RingConfig];
  entries: EntryItem[];
  zoomed_quadrant?: number;
};
