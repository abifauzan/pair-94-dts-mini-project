import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoints } from "../../../../configs/axios";
import { getApiMovies } from "../../api";

export const fetchNowPlayingAction = createAsyncThunk(
  "nowPlaying/fetchNowPlayingAction",
  async () => getApiMovies(endpoints.now_playing)
);
