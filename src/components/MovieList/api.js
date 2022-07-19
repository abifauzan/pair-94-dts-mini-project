import { apiRequest, endpoints } from "../../configs/axios";

export const getApiMovies = async (type) => {
  const response = await apiRequest({
    path: type,
    method: "GET",
  });

  return response?.data;
};
