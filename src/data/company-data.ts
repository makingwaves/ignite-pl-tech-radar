import type {
  EntryItem,
  EntryItemWithoutQuadrant,
  RadarConfig,
} from "../logic/radar-config";
import { Moved, Quadrant, Ring } from "../logic/radar-config";

const rings: RadarConfig["rings"] = [
  { name: "ADOPT", color: "#EB4646", textColor: "#DBD1C7", index: Ring.Adopt },
  { name: "TRIAL", color: "#CAE0DC", textColor: "#001932", index: Ring.Trial },
  {
    name: "ASSESS",
    color: "#DBD1C7",
    textColor: "#001932",
    index: Ring.Assess,
  },
  { name: "HOLD", color: "#001932", textColor: "#DBD1C7", index: Ring.Hold },
];

const quadrants: RadarConfig["quadrants"] = [
  { name: "Languages & Frameworks", index: Quadrant.BottomRight },
  { name: "Products, Platforms & Cloud", index: Quadrant.BottomLeft },
  { name: "Techniques", index: Quadrant.TopLeft },
  { name: "Tools", index: Quadrant.TopRight },
];

const languagesAndFrameworks: EntryItemWithoutQuadrant[] = [
  {
    ring: Ring.Adopt,
    label: "React.js",
    moved: Moved.None,
    description: `React is a free and open-source front-end JavaScript library for building user interfaces based on 
      UI components. It is maintained by Meta and a community of individual developers and companies.`,
    link: "https://reactjs.org/",
  },
  {
    ring: Ring.Adopt,
    label: "Next.js", 
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "TypeScript",
    moved: Moved.None,
  },
  {
    ring: Ring.Hold,
    label: "JavaScript",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Node.js",
    moved: Moved.None,
    link: "https://nodejs.org/en/",
  },
  {
    ring: Ring.Trial,
    label: "Gatsby",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "C#",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "NestJS",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "ASP.NET",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "OpenAPI",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "GraphQL", 
    moved: Moved.None,
  },
  {
    ring: Ring.Hold,
    label: "PHP",
    moved: Moved.Out,
  },
  {
    ring: Ring.Trial,
    label: "Java",
    moved: Moved.In,
  },
];

const productsPlatformsCloud: EntryItemWithoutQuadrant[] = [
  {
    ring: Ring.Adopt,
    label: "Amazon DynamoDB",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Amazon SQS",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Azure CosmosDB",
    moved: Moved.None,
  },
  {
    ring: Ring.Assess,
    label: "Sanity.io",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Contentful",
    moved: Moved.None,
  },
  {
    ring: Ring.Assess,
    label: "Shopify",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Vercel",
    moved: Moved.None,
  },
  {
    ring: Ring.Assess,
    label: "Strapi",
    moved: Moved.None,
  },
  {
    ring: Ring.Assess,
    label: "Omnium",
    moved: Moved.None,
  },
  {
    ring: Ring.Assess,
    label: "Optimizely Zaius",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Optimizely CMS",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Optimizely Commerce",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Umbraco",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure Service Bus",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure Storage",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure AD",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Azure B2C",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure serverless computing",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "AWS serverless computing",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Power BI",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Elasticsearch",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure SQL Server",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Optimizely DXP",
    moved: Moved.None,
  },
  {
    ring: Ring.Assess,
    label: "Firebase",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure Cognitive Services", 
    moved: Moved.None,
  },
  {
    ring: Ring.Hold,
    label: "Blazor", //todo verify
    moved: Moved.None,
  },
  {
    ring: Ring.Hold,
    label: "Sitefinity",
    moved: Moved.None,
  },
  {
    ring: Ring.Hold,
    label: "Virto Commerce",
    moved: Moved.None,
  },
];

const techniques: EntryItemWithoutQuadrant[] = [
  {
    ring: Ring.Trial,
    label: "OWASP",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "GitFlow",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Trunk Based Development",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Microservices",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "DDD",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "JAMstack",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Agile",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Scrum",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Code Review",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "API management",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "CI/CD",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "A/B Testing",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Application metrics",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "MVPs - prototyping",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Using telemetry",
    moved: Moved.None,
  }
];

const tools: EntryItemWithoutQuadrant[] = [
  {
    ring: Ring.Adopt,
    label: "Infrastructure as code",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Grafana",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "ELK Stack",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Kubernetes",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "GitHub",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure DevOps",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "GitHub Actions",
    moved: Moved.None,
  },
  {
    ring: Ring.Hold,
    label: "TeamCity",
    moved: Moved.None,
  },
  {
    ring: Ring.Hold,
    label: "Octopus",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Docker",
    moved: Moved.None,
  },
];

const items: EntryItem[] = [
  ...languagesAndFrameworks.map(
    (item): EntryItem => ({
      ...item,
      quadrant: Quadrant.BottomRight,
      active: item.active ?? true,
    })
  ),
  ...productsPlatformsCloud.map(
    (item): EntryItem => ({
      ...item,
      quadrant: Quadrant.BottomLeft,
      active: item.active ?? true,
    })
  ),
  ...techniques.map(
    (item): EntryItem => ({
      ...item,
      quadrant: Quadrant.TopLeft,
      active: item.active ?? true,
    })
  ),
  ...tools.map(
    (item): EntryItem => ({
      ...item,
      quadrant: Quadrant.TopRight,
      active: item.active ?? true,
    })
  ),
];

export const CompanyData = {
  items,
  quadrants,
  rings,
};
