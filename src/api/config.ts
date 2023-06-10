import axios, { AxiosInstance } from "axios";
import applyConverters from "axios-case-converter";
import { stringify } from "qs";

const httpRequestsTimeout = Number(process.env.HTTP_REQUESTS_TIMEOUT);
const apiBaseUrl = process.env.API_URL;

const axiosInstance = applyConverters(
  axios.create({
    baseURL: apiBaseUrl,
    timeout: httpRequestsTimeout,
    paramsSerializer: (params) => stringify(params, { arrayFormat: "repeat" }),
  })
);

export default axiosInstance;
