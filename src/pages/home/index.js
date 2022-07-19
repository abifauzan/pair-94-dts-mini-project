import { useEffect, useCallback } from "react";
import Hero from "../../components/Hero";
import { fetchNowPlayingAction } from "../../components/MovieList/_redux/now-playing/NowPlaying.action";
import { fetchOriginalsAction } from "../../components/MovieList/_redux/originals/Originals.action";
import { fetchPopularAction } from "../../components/MovieList/_redux/popular/Popular.action";
import { fetchTopRatedAction } from "../../components/MovieList/_redux/top-rated/TopRated.action";
import { fetchTrendingAction } from "../../components/MovieList/_redux/trending/Trending.action";
import { fetchUpcomingAction } from "../../components/MovieList/_redux/upcoming/Upcoming.action";
import useAuth from "../../hooks/useAuth";
import { useAppDispatch } from "../../redux/hooks";
import { HomeContainer } from "./Home.style";

const movie = {
  backdrop_path: "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg",
  name: "Minions: The Rise of Gru",
  overview:
    "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions",
};

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
    <HomeContainer>
      <Hero movie={movie} />

      <div className="mt-[500px]">
        <h1 className="text-black text-xl">Scroll me</h1>
      </div>
    </HomeContainer>
  );
};

export default Home;
