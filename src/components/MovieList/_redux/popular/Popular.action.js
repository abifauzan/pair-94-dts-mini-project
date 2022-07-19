import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../../../configs/axios";
import { getApiMovies } from "../../api";

export const fetchPopularAction = createAsyncThunk("popular/fetchPopularAction", async () =>
  getApiMovies(endpoints.popular)
);
