import { apiRequest } from "../../configs/axios";

export const getDetailMovie = async (id) => {
  const response = await apiRequest({
    path: `/movie/${id}`,
    method: "GET",
  });

  return response?.data;
};
