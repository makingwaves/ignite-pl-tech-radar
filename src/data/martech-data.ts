import type { EntryItem, RadarConfig } from "../logic/radar-config";
import { Quadrant, Ring, Moved } from "../logic/radar-config";

const rings: RadarConfig["rings"] = [
  {
    name: "ADOPT",
    color: "#EB4646",
    textColor: "#DBD1C7",
    index: Ring.Adopt,
    radius: 130,
  },
  {
    name: "TRIAL",
    color: "#CAE0DC",
    textColor: "#001932",
    index: Ring.Trial,
    radius: 220,
  },
  {
    name: "ASSESS",
    color: "#DBD1C7",
    textColor: "#001932",
    index: Ring.Assess,
    radius: 310,
  },
  {
    name: "HOLD",
    color: "#001932",
    textColor: "#DBD1C7",
    index: Ring.Hold,
    radius: 400,
  },
];

const quadrants: RadarConfig["quadrants"] = [
  { name: "CMS & Data", index: Quadrant.BottomRight },
  { name: "User analytics", index: Quadrant.BottomLeft },
  { name: "Distribution", index: Quadrant.TopLeft },
  { name: "Commerce", index: Quadrant.TopRight },
];

const items: EntryItem[] = [
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Adopt,
    label: "Sanity.io",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Adopt,
    label: "Contentful",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Adopt,
    label: "Optimizely CMS",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Hold,
    label: "Umbraco CMS",
    active: true,
    moved: Moved.Out,
  },
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Assess,
    label: "Strapi CMS",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Hold,
    label: "Builder.io",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Trial,
    label: "Sitecore CDP",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Assess,
    label: "Tealium CDP",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "Google Analytics",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Adopt,
    label: "Next.js",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Adopt,
    label: "PWA",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Trial,
    label: "React Native",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Hold,
    label: "Flutter",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Hold,
    label: "Shopify Hydrogen",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Adopt,
    label: "Vercel",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Adopt,
    label: "Serverless",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopRight,
    ring: Ring.Assess,
    label: "Shopify",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopRight,
    ring: Ring.Hold,
    label: "Medusa.js",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopRight,
    ring: Ring.Assess,
    label: "Omnium",
    active: true,
    moved: Moved.None,
  },
];

export const MartechData = {
  rings,
  quadrants,
  items,
};
