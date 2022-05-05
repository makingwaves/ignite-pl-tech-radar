import { Quadrant } from "../enum/Quadrant.enum";
import { Ring } from "../enum/Ring.enum";
import { Moved } from "../enum/Moved.enum";

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

export type Radar = {
  title: string;
  description: string;
  entries: EntryItem[];
  isPublished: boolean;
  path: string;
  quadrants: [QuadrantConfig, QuadrantConfig, QuadrantConfig, QuadrantConfig];
  rings: [RingConfig, RingConfig, RingConfig, RingConfig];
  rightColumn: any;
  name: string;
};

export type SidebarRoute = {
  name: string;
  path: string;
};
