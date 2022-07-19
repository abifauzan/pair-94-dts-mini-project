import { createSlice } from "@reduxjs/toolkit";
import { fetchOriginalsAction } from "./Originals.action";
import { initialState } from "./Originals.state";

const originalsSlice = createSlice({
  name: "movies/originals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOriginalsAction.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }))
      .addCase(fetchOriginalsAction.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchOriginalsAction.rejected, (state) => ({
        ...state,
        error: true,
        loading: false,
      }));
  },
});

export default originalsSlice;
