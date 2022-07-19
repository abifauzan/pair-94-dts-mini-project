import axios, { Method, AxiosRequestConfig, AxiosPromise } from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "c02f0edc5789e39aa1c491cf515d8e22";

export const endpoints = {
  originals: "/discover/tv",
  trending: "/trending/all/week",
  now_playing: "/movie/now_playing",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  upcoming: "/movie/upcoming",
};

export const apiRequest = (arguments_) => {
  const { method, bodyRequest, params, path, url, timeout, headers } = arguments_;

  const baseUrl = url || BASE_URL;
  const config = {
    params: {
      api_key: API_KEY,
    },
    url: `${baseUrl}${path}`,
    method,
  };

  if (headers) {
    config.headers = { ...config.headers, ...headers };
  }

  if (bodyRequest) {
    config.data = bodyRequest;
  }
  if (params) {
    config.params = params;
  }

  if (timeout) {
    config.timeout = timeout;
  }

  return axios(config);
};
