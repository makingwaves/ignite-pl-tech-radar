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

export enum Quadrant {
  BottomRight = 0,
  BottomLeft = 1,
  TopLeft = 2,
  TopRight = 3,
}

export enum Moved {
  None = 0,
  In = 1,
  Out = -1,
}

export enum Ring {
  Adopt = 0,
  Trial = 1,
  Assess = 2,
  Hold = 3,
}

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
