import sanityClient from "@sanity/client";

// TODO move this keys to .env (?)
const projectId = "";
const dataset = "production";
const apiVersion = "v1";

const client = sanityClient({
  projectId,
  dataset,
  apiVersion,
  // TODO turn on for production
  useCdn: true,
});

export default client;
