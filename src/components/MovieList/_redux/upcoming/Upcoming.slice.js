import { createSlice } from "@reduxjs/toolkit";
import { fetchUpcomingAction } from "./Upcoming.action";
import { initialState } from "./Upcoming.state";

const upcomingSlice = createSlice({
  name: "movies/upcoming",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcomingAction.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      }))
      .addCase(fetchUpcomingAction.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchUpcomingAction.rejected, (state) => ({
        ...state,
        error: true,
        loading: false,
      }));
  },
});

export default upcomingSlice;
