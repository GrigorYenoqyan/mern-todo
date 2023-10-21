import axios from 'axios';
import applyConverters from 'axios-case-converter';
import { stringify } from 'qs';

const apiBaseUrl = process.env.API_URL;

const axiosInstance = applyConverters(
  axios.create({
    baseURL: apiBaseUrl,
    timeout: 5000,
    paramsSerializer: (params) => stringify(params, { arrayFormat: 'repeat' }),
  })
);

export default axiosInstance;
