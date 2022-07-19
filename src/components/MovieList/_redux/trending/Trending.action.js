import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../../../configs/axios";
import { getApiMovies } from "../../api";

export const fetchTrendingAction = createAsyncThunk("trending/fetchTrendingAction", async () =>
  getApiMovies(endpoints.trending)
);
