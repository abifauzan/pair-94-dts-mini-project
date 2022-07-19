import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../../../configs/axios";
import { getApiMovies } from "../../api";

export const fetchTopRatedAction = createAsyncThunk("topRated/fetchTopRatedAction", async () =>
  getApiMovies(endpoints.top_rated)
);
