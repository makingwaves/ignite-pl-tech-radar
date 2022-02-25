import type {
  EntryItem,
  EntryItemWithoutQuadrant,
  RadarConfig,
} from "../logic/radar-config";
import { Moved, Quadrant, Ring } from "../logic/radar-config";

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
    ring: Ring.Trial,
    label: "Node.js",
    moved: Moved.None,
    link: "https://nodejs.org/en/",
  },
  {
    ring: Ring.Adopt,
    label: "Gatsby",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "C#",
    moved: Moved.None,
  },
  {
    ring: Ring.Assess,
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
    ring: Ring.Adopt,
    label: "GraphQL",
    moved: Moved.None,
  },
  {
    ring: Ring.Hold,
    label: "PHP",
    moved: Moved.Out,
  },
  {
    ring: Ring.Assess,
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
    ring: Ring.Adopt,
    label: "Amazon SQS",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure CosmosDB",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Sanity.io",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
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
    ring: Ring.Hold,
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
    ring: Ring.Adopt,
    label: "Azure Functions",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure ARM Templates",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "AWS EC2",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure App Service",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure App Insights",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "AWS CloudWatch",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure Kubernetest Service",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "AWS Fargate",
    moved: Moved.None,
  },
  {
    ring: Ring.Assess,
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
    label: "Google Cloud Translation API",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Microsoft SQL Server",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Entity Framework",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Optimizely Search & Navigation",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Optimizely DXP",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "AWS SES",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure Sendgrid",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure VMs",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure Key Vault",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Firebase",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure Cognitive Services",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Blazor",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Sitefinity",
    moved: Moved.None,
  },
  {
    ring: Ring.Hold,
    label: "Virto Commerce",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Amazon S3",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Amazon CloudFront",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "AWS Lambda",
    moved: Moved.None,
  },
];

const techniques: EntryItemWithoutQuadrant[] = [
  {
    ring: Ring.Adopt,
    label: "OWASP",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "TDD",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "GitFlow",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Trunk Based Developmen",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "IaaC",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "CQRS",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Microservices",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
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
    label: "Headless architecture",
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
    label: "Pair Programming",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Core Review",
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
    label: "Feature Toggling",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Focus Time",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Always upgrade as a practice",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Collective code ownership",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Metrics",
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
  },
  {
    ring: Ring.Adopt,
    label: "2-factor auth",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "code guides",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "auto code formatting",
    moved: Moved.None,
  },
];

// todo
//  Postman, npm, Yarn, grunt, gulp, Confluence, Trello, Miro, Jira, OWASP ZAP, SonarCube, Sentry.io,
// should we really go into that? some of them are industry standards
const tools: EntryItemWithoutQuadrant[] = [
  {
    ring: Ring.Adopt,
    label: "Grafana",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "ELK Stack",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
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
    label: "Gitlab",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Azure Devops",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "TeamCity",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Octopus",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "VSCode",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Visual Studio",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Jetbrains IDEs",
    moved: Moved.None,
  },
  {
    ring: Ring.Adopt,
    label: "Postman",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "AWS CloudFormation",
    moved: Moved.None,
  },
  {
    ring: Ring.Assess,
    label: "AWS Cloud Development Kit",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "Docker",
    moved: Moved.None,
  },
  {
    ring: Ring.Assess,
    label: "Terraform",
    moved: Moved.None,
  },
  {
    ring: Ring.Assess,
    label: "Serverless Framework",
    moved: Moved.None,
  },
  {
    ring: Ring.Trial,
    label: "GitHub Actions",
    moved: Moved.None,
  },
];

// TODO: Prefixes ala https://ministryofjustice.github.io/hmpps-digital-tech-radar/docs/index.html
// TODO: Conclusions, tools, etc. from state of JS 2021?
// TODO: Add code formatting tools? E.g.: Prettier, ESLint...
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
