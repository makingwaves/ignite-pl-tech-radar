import type { EntryItem, RadarConfig } from '../logic/radar-config';
import { Ring, Quadrant, Moved } from '../logic/radar-config';

const rings: RadarConfig['rings'] = [
	{ name: 'ADOPT', color: '#EB4646', textColor: '#DBD1C7', index: Ring.Adopt },
	{ name: 'TRIAL', color: '#CAE0DC', textColor: '#001932', index: Ring.Trial },
	{
		name: 'ASSESS',
		color: '#DBD1C7',
		textColor: '#001932',
		index: Ring.Assess
	},
	{ name: 'HOLD', color: '#001932', textColor: '#DBD1C7', index: Ring.Hold }
];

const quadrants: RadarConfig['quadrants'] = [
	{ name: 'Languages & Frameworks', index: Quadrant.BottomRight },
	{ name: 'TODO', index: Quadrant.BottomLeft },
	{ name: 'TODO', index: Quadrant.TopLeft },
	{ name: 'TODO', index: Quadrant.TopRight }
];

const items: EntryItem[] = [
	{
		quadrant: Quadrant.BottomRight,
		ring: Ring.Adopt,
		label: 'React.js',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomRight,
		ring: Ring.Adopt,
		label: 'Next.js',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomRight,
		ring: Ring.Adopt,
		label: 'TypeScript',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomRight,
		ring: Ring.Hold,
		label: 'JavaScript',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomRight,
		ring: Ring.Trial,
		label: 'Node.js',
		active: true,
		moved: Moved.None,
		link: 'https://nodejs.org/en/'
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Adopt,
		label: 'Sanity.io',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Adopt,
		label: 'Contentful',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Assess,
		label: 'Shopify',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Adopt,
		label: 'Optimizely',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomRight,
		ring: Ring.Adopt,
		label: 'Gatsby',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Adopt,
		label: 'Vercel',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Adopt,
		label: 'AWS',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Adopt,
		label: 'Azure',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Assess,
		label: 'Strapi',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Assess,
		label: 'Omnium',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Assess,
		label: 'Optimizely Zaius',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Adopt,
		label: 'C#',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomRight,
		ring: Ring.Assess,
		label: 'NestJS',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Adopt,
		label: 'Optimizely CMS',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Trial,
		label: 'Optimizely Commerce',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Hold,
		label: 'Umbraco',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Adopt,
		label: 'C#',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Adopt,
		label: 'ASP.NET',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Adopt,
		label: 'AWS',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Adopt,
		label: 'Amazon DynamoDB',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Adopt,
		label: 'Amazon SQS',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Adopt,
		label: 'Amazon S3',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Adopt,
		label: 'Amazon CloudFront',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Trial,
		label: 'AWS Lambda',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Trial,
		label: 'AWS CloudFormation',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Assess,
		label: 'AWS Cloud Development Kit',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Trial,
		label: 'Docker',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Assess,
		label: 'Terraform',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Assess,
		label: 'Serverless Framework',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Trial,
		label: 'GitHub Actions',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.BottomLeft,
		ring: Ring.Assess,
		label: 'OpenAPI',
		active: true,
		moved: Moved.None
	},
	{
		quadrant: Quadrant.TopLeft,
		ring: Ring.Assess,
		label: 'Medusa.js',
		active: true,
		moved: Moved.None
	}
];

export const CompanyData = {
	items,
	quadrants,
	rings
};
