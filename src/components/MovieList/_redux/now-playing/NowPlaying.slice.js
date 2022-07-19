import { createSlice } from "@reduxjs/toolkit";
import { fetchNowPlayingAction } from "./NowPlaying.action";
import { initialState } from "./NowPlaying.state";

const nowPlayingSlice = createSlice({
  name: "movies/nowPlaying",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNowPlayingAction.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }))
      .addCase(fetchNowPlayingAction.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchNowPlayingAction.rejected, (state) => ({
        ...state,
        error: true,
        loading: false,
      }));
  },
});

export default nowPlayingSlice;
