import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingAction } from "./Trending.action";
import { initialState } from "./Trending.state";

const trendingSlice = createSlice({
  name: "movies/trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingAction.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }))
      .addCase(fetchTrendingAction.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchTrendingAction.rejected, (state) => ({
        ...state,
        error: true,
        loading: false,
      }));
  },
});

export default trendingSlice;
