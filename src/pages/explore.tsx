import type { GetServerSideProps } from "next";
import React from "react";
import axios from "axios";
// import ExplorePageContainer from "@/containers/ExplorePageContainer";
import { BACKEND_BASE_URL } from "@/config/constant";

export const getServerSideProps = (async (context) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${BACKEND_BASE_URL}/get_all_topics/`,
    headers: {},
  };
  const res = await axios.request(config);
  return {
    props: {
      data: res?.data?.data || [],
    },
  };
}) satisfies GetServerSideProps<{
  data: any;
}>;

const Explore: React.FC = ({ data }: any) => {
  return <></>;
};

export default Explore;
