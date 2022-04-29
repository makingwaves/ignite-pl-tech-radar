import sanityClient from "@sanity/client";

const projectId = "gg3bffsk";
const dataset = "production";
const apiVersion = "v1";
const isProd = process.env.NODE_ENV === 'production';

const client = sanityClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: isProd,
});

export default client;
