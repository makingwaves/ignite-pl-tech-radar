import { FC } from "react";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
};

export const Meta: FC<Props> = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="shortcut icon" href="/favicon.svg" />
  </Head>
);
