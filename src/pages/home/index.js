import { useEffect, useCallback } from "react";
import { fetchNowPlayingAction } from "../../components/MovieList/_redux/now-playing/NowPlaying.action";
import { fetchOriginalsAction } from "../../components/MovieList/_redux/originals/Originals.action";
import { fetchPopularAction } from "../../components/MovieList/_redux/popular/Popular.action";
import { fetchTopRatedAction } from "../../components/MovieList/_redux/top-rated/TopRated.action";
import { fetchTrendingAction } from "../../components/MovieList/_redux/trending/Trending.action";
import { fetchUpcomingAction } from "../../components/MovieList/_redux/upcoming/Upcoming.action";
import useAuth from "../../hooks/useAuth";
import { useAppDispatch } from "../../redux/hooks";

const Home = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();

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
  }, [fetchData]);

  return (
    <div>
      <h1 className="mt-10 bg-green-400"> Home Page</h1>
    </div>
  );
};

export default Home;
