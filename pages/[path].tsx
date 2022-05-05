import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { RadarWithLegend } from "../components/RadarWithLegend/RadarWithLegend";
import { DescriptionSection } from "../components/DescriptionSection/DescriptionSection";
import client from "../services/sanityClient";
import { Radar, SidebarRoute } from "../types/radar.types";

const isPublished =
  process.env.NODE_ENV === "development" ? "" : "&& isPublished";

type StaticProps = {
  radar: Radar;
};

const Path: NextPage<StaticProps> = ({ radar }) => (
  <>
    <RadarWithLegend
      rings={radar?.rings || []}
      entryItems={radar?.entries || []}
      quadrants={radar?.quadrants || []}
    />

    <DescriptionSection
      rightColumn={radar?.rightColumn || []}
      rings={radar?.rings || []}
      description={radar?.description || ""}
    />
  </>
);

export default Path;

export const getStaticProps: GetStaticProps = async (context) => {
  const query =
    `*[_type == "radar" ${isPublished}]` +
    "{description,name,entries[]{moved,ring,quadrant,'link': technology->link," +
    "'active': technology->active,'description': technology->description,'label': technology->label},isPublished,'path': path.current,quadrants[],rightColumn,rings,title}";
  const response = await client.fetch<Radar[]>(query);
  const radar = response.find(
    (radar) => radar.path === `/${context?.params?.path}` || ""
  );
  const sidebarRoutes: SidebarRoute[] = response.map((radar) => ({
    name: radar.name,
    path: radar.path,
  }));

  return {
    props: {
      radar,
      sidebarRoutes,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "radar" ${isPublished}]{ 'path': path.current }`;
  const routes = await client.fetch<{ path: string }[]>(query);

  return {
    paths: routes.map((radar) => radar.path),
    fallback: true,
  };
};
