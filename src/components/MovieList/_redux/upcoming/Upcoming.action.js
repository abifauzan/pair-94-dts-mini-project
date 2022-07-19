import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../../../configs/axios";
import { getApiMovies } from "../../api";

export const fetchUpcomingAction = createAsyncThunk("upcoming/fetchUpcomingAction", async () =>
  getApiMovies(endpoints.upcoming)
);
