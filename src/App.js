import React, { useCallback, useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setTheme } from "./redux/general/app";
import GlobalStyles from "./GlobalStyles";
import { fetchNowPlayingAction } from "./components/MovieList/_redux/now-playing/NowPlaying.action";
import { fetchOriginalsAction } from "./components/MovieList/_redux/originals/Originals.action";
import { fetchPopularAction } from "./components/MovieList/_redux/popular/Popular.action";
import { fetchTopRatedAction } from "./components/MovieList/_redux/top-rated/TopRated.action";
import { fetchTrendingAction } from "./components/MovieList/_redux/trending/Trending.action";
import { fetchUpcomingAction } from "./components/MovieList/_redux/upcoming/Upcoming.action";

function App() {
  const { theme } = useAppSelector((state) => state.app);
  const listMovies = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const toggleTheme = () => {
    const valueTheme = theme === "dark" ? "light" : "dark";

    dispatch(setTheme(valueTheme));
  };

  const fetchData = useCallback(() => {
    dispatch(fetchNowPlayingAction());
    dispatch(fetchOriginalsAction());
    dispatch(fetchPopularAction());
    dispatch(fetchTopRatedAction());
    dispatch(fetchTrendingAction());
    dispatch(fetchUpcomingAction());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData, pathname]);

  return (
    <main className="w-full relative h-full">
      <GlobalStyles />
      <Header />

      {/* <button onClick={toggleTheme}>Toggle Theme</button> */}
      <Outlet />

      {/* <p>Theme: {theme}</p> */}
    </main>
  );
}

export default App;
