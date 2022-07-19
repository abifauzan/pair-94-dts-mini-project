import { createSlice } from "@reduxjs/toolkit";
import { fetchPopularAction } from "./Popular.action";
import { initialState } from "./Popular.state";

const popularSlice = createSlice({
  name: "movies/popular",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularAction.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }))
      .addCase(fetchPopularAction.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchPopularAction.rejected, (state) => ({
        ...state,
        error: true,
        loading: false,
      }));
  },
});

export default popularSlice;
