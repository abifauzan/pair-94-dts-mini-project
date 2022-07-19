import { combineReducers } from "redux";
import nowPlayingSlice from "./now-playing/NowPlaying.slice";
import originalsSlice from "./originals/Originals.slice";
import popularSlice from "./popular/Popular.slice";
import topRatedSlice from "./top-rated/TopRated.slice";
import trendingSlice from "./trending/Trending.slice";
import upcomingSlice from "./upcoming/Upcoming.slice";

export const movieListReducer = combineReducers({
  nowPlaying: nowPlayingSlice.reducer,
  originals: originalsSlice.reducer,
  popular: popularSlice.reducer,
  topRated: topRatedSlice.reducer,
  trending: trendingSlice.reducer,
  upcoming: upcomingSlice.reducer,
});
