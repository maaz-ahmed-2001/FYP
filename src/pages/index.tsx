import { GetServerSideProps } from "next";
import axios from "axios";
import HomepageContainer from "@/containers/HomepageContainer";
import { BACKEND_BASE_URL } from "@/config/constant";

export default function Home() {
  return <HomepageContainer />;
}
