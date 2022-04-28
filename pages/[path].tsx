import { NextPage } from 'next';
import { RadarWithLegend } from '../components/RadarWithLegend/RadarWithLegend';
import { DescriptionSection } from '../components/DescriptionSection/DescriptionSection';
import client from '../services/sanityClient';

const isPublished =
  process.env.NODE_ENV === 'development' ? '' : '&& isPublished';

type StaticProps = {
  radar: any;
};

const Path: NextPage<StaticProps> = ({ radar }) => (
  <>
    <RadarWithLegend
      rings={radar?.rings || []}
      entryItems={radar?.entries || []}
      quadrants={radar?.quadrants || []}
    />

    <DescriptionSection
      rightColumn={radar.rightColumn}
      rings={radar?.rings || []}
      description={radar.description}
    />
  </>
);

export default Path;

export async function getStaticProps(context: any) {
  const query =
    `*[_type == "radar" ${isPublished}]` +
    "{description,entries[]{moved,ring,quadrant,'link': technology->link," +
    "'active': technology->active,'description': technology->description,'label': technology->label},isPublished,'path': path.current,quadrants[],rightColumn,rings,title}";
  const response = await client.fetch(query);
  const radar = response.find(
    (radar: any) => radar.path === `/${context.params.path}`
  );

  return {
    props: {
      radar,
    },
  };
}

export async function getStaticPaths() {
  const query = `*[_type == "radar" ${isPublished}]{ path }`;
  const radar = await client.fetch(query);

  return {
    paths: radar.map((radar: any) => radar.path.current),
    fallback: true,
  };
}
