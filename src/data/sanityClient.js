import sanityClient from "@sanity/client";

const projectId = "gg3bffsk";
const dataset = "production";
const apiVersion = "v1";

const client = sanityClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export default client;
