import type { EntryItem, RadarConfig } from "../logic/radar-config";
import { Ring, Quadrant, Moved } from "../logic/radar-config";

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
  { name: "Technics", index: Quadrant.TopLeft },
  { name: "Tools", index: Quadrant.TopRight },
];

const items: EntryItem[] = [
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Adopt,
    label: "React.js",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Adopt,
    label: "Next.js",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Adopt,
    label: "TypeScript",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Hold,
    label: "JavaScript",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Trial,
    label: "Node.js",
    active: true,
    moved: Moved.None,
    link: "https://nodejs.org/en/",
  },
  // BottomRight
  // C#, .NET, OpenAPI, PHP, ASP.NET, GraphQL, Java

  // BottomLeft
  // Azure CosmosDB, Azure Service Bus, Azure Storage, Azure AD, Azure Functions, Azure ARM Templates, AWS EC2, Azure App Service, Azure App Insights, AWS CloudWatch, Azure Kubernetes Service, AWS Fargate, Power BI, Elasticsearch, Google Cloud Translation API, Microsoft SQL Server, Entity Framework, Optimizely Search & Navigation, Optimizdely DXP, Umbraco, AWS SES, Azure Sendgrid, Azure VMs, Azure Key Vault, Firebase, Azure Cognitive Services, Blazor, Sitefinity, Virto Commerce,

  // TopLeft
  // OWASP, TDD, Gitflow, Trunk Based Development, IaaC, CQRS, Microservices, DDD, Headless architecture, agile, Scrum, pair programming, code review, API management, feature toggles, CI/CD, focus time, Always upgrade as a practice, Collective code ownership, metrics, MVPs - prototyping, using telemetry, 2-factor auth, code guides, auto code formatting

  // TopRight
  // Grafana, ELK stack, Kubernetes, GitHub, GitLab Azure DevOps, TeamCity, Octopus, VSCode, Visual Studio, IntelliJ IDEA, IntelliJ WebStorm, IntelliJ Rider, Postman, npm, Yarn, grunt, gulp, Confluence, Trello, Miro, Jira, OWASP ZAP, SonarCube, Sentry.io,

  // TODO: Prefixes ala https://ministryofjustice.github.io/hmpps-digital-tech-radar/docs/index.html
  // TODO: Conclusions, tools, etc. from state of JS 2021?
  // TODO: Add code formatting tools? E.g.: Prettier, ESLint...
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "Sanity.io",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "Contentful",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Assess,
    label: "Shopify",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "Optimizely",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Adopt,
    label: "Gatsby",
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
    label: "AWS",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Adopt,
    label: "Azure",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Assess,
    label: "Strapi",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Assess,
    label: "Omnium",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Assess,
    label: "Optimizely Zaius",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Adopt,
    label: "C#",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomRight,
    ring: Ring.Assess,
    label: "NestJS",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "Optimizely CMS",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Trial,
    label: "Optimizely Commerce",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Hold,
    label: "Umbraco",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "C#",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "ASP.NET",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "AWS",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "Amazon DynamoDB",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "Amazon SQS",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "Amazon S3",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Adopt,
    label: "Amazon CloudFront",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Trial,
    label: "AWS Lambda",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Trial,
    label: "AWS CloudFormation",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Assess,
    label: "AWS Cloud Development Kit",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Trial,
    label: "Docker",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Assess,
    label: "Terraform",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Assess,
    label: "Serverless Framework",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Trial,
    label: "GitHub Actions",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.BottomLeft,
    ring: Ring.Assess,
    label: "OpenAPI",
    active: true,
    moved: Moved.None,
  },
  {
    quadrant: Quadrant.TopLeft,
    ring: Ring.Assess,
    label: "Medusa.js",
    active: true,
    moved: Moved.None,
  },
];

export const CompanyData = {
  items,
  quadrants,
  rings,
};
