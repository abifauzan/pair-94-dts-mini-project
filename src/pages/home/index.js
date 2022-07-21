import { useEffect, useCallback } from "react";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import MovieList from "../../components/MovieList";
import { fetchNowPlayingAction } from "../../components/MovieList/_redux/now-playing/NowPlaying.action";
import { fetchOriginalsAction } from "../../components/MovieList/_redux/originals/Originals.action";
import { fetchPopularAction } from "../../components/MovieList/_redux/popular/Popular.action";
import { fetchTopRatedAction } from "../../components/MovieList/_redux/top-rated/TopRated.action";
import { fetchTrendingAction } from "../../components/MovieList/_redux/trending/Trending.action";
import { fetchUpcomingAction } from "../../components/MovieList/_redux/upcoming/Upcoming.action";
import useAuth from "../../hooks/useAuth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
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
  const listMovies = useAppSelector((state) => state.movies);

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

      <Container>
        <MovieList data={listMovies.upcoming} label="Upcoming" />
        <MovieList data={listMovies.topRated} label="Top Rated" />
        <MovieList data={listMovies.popular} label="Popular" />
      </Container>
    </HomeContainer>
  );
};

export default Home;
