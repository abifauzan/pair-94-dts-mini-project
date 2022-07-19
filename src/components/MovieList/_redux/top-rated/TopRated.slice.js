import { createSlice } from "@reduxjs/toolkit";
import { fetchTopRatedAction } from "./TopRated.action";
import { initialState } from "./TopRated.state";

const topRatedSlice = createSlice({
  name: "movies/topRated",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopRatedAction.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }))
      .addCase(fetchTopRatedAction.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchTopRatedAction.rejected, (state) => ({
        ...state,
        error: true,
        loading: false,
      }));
  },
});

export default topRatedSlice;
