import React, { useCallback, useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { useAppDispatch } from "./redux/hooks";
import GlobalStyles from "./GlobalStyles";
import { fetchNowPlayingAction } from "./components/MovieList/_redux/now-playing/NowPlaying.action";
import { fetchOriginalsAction } from "./components/MovieList/_redux/originals/Originals.action";
import { fetchPopularAction } from "./components/MovieList/_redux/popular/Popular.action";
import { fetchTopRatedAction } from "./components/MovieList/_redux/top-rated/TopRated.action";
import { fetchTrendingAction } from "./components/MovieList/_redux/trending/Trending.action";
import { fetchUpcomingAction } from "./components/MovieList/_redux/upcoming/Upcoming.action";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

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
    <main className="w-full relative h-full bg-black">
      <ScrollToTop />
      <GlobalStyles />
      <Header />

      <Outlet />

      <Footer />
    </main>
  );
}

export default App;
