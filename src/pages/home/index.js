import { useEffect, useCallback, useState } from "react";
import Container from "../../components/Container";
import Hero from "../../components/Hero";
import MovieList from "../../components/MovieList";
import { fetchNowPlayingAction } from "../../components/MovieList/_redux/now-playing/NowPlaying.action";
import { fetchOriginalsAction } from "../../components/MovieList/_redux/originals/Originals.action";
import { fetchPopularAction } from "../../components/MovieList/_redux/popular/Popular.action";
import { fetchTopRatedAction } from "../../components/MovieList/_redux/top-rated/TopRated.action";
import { fetchTrendingAction } from "../../components/MovieList/_redux/trending/Trending.action";
import { fetchUpcomingAction } from "../../components/MovieList/_redux/upcoming/Upcoming.action";
import { apiRequest } from "../../configs/axios";
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
  const [randomMovie, setRandomMovie] = useState({});

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

  const fetchRandomMovie = async () => {
    const RandNum = Math.floor(Math.random() * 20);

    const response = await apiRequest({
      path: "/trending/movie/week",
      method: "GET",
    });

    if (response?.data?.results?.length) {
      setRandomMovie(response?.data?.results[RandNum]);
    }
  };

  useEffect(() => {
    fetchRandomMovie();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <HomeContainer>
      <Hero movie={randomMovie} />

      <Container>
        <MovieList data={listMovies.nowPlaying} label="Now Playing" />
        <MovieList data={listMovies.trending} label="Trending" />
        <MovieList data={listMovies.topRated} label="Top Rated" />
        <MovieList data={listMovies.upcoming} label="Upcoming" />
      </Container>
    </HomeContainer>
  );
};

export default Home;
