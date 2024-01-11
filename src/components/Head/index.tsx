import React from "react";
import Head from "next/head";

type PageHeadProps = {
  title: string;
};

const PageHead: React.FC<PageHeadProps> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content="page title" key="title" />
    </Head>
  );
};

export default PageHead;
