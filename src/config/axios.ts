import axios from "axios";
import { BACKEND_BASE_URL } from "./constant";

const getAxiosInstance = (baseURL: string) => {
  return axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });
};

const axiosInstances = {
  default: getAxiosInstance(BACKEND_BASE_URL || ""),
};

export default axiosInstances;
