import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../../../configs/axios";
import { getApiMovies } from "../../api";

export const fetchOriginalsAction = createAsyncThunk("original/fetchOriginalsAction", async () =>
  getApiMovies(endpoints.originals)
);
