import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { movieListReducer } from "../components/MovieList/_redux";

import appSlice from "./general/app";
// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   whitelist: ['auth']
// }

const appPersistConfig = {
  key: "app",
  storage,
  whitelist: ["theme"],
};

const reducer = combineReducers({
  app: persistReducer(appPersistConfig, appSlice.reducer),
  movies: movieListReducer,
});

// const persisted = persistReducer(persistConfig, reducer)
export default reducer;
