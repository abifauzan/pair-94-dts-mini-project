import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { MovieDetailContainer } from "./MovieDetail.style";
import { BsPlayFill } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import { getDetailMovie } from "./api";
import { useAppSelector } from "../../redux/hooks";
import MovieList from "../../components/MovieList";
import Container from "../../components/Container";
import Hero from "../../components/Hero";

const MovieDetail = () => {
  const [detail, setDetail] = useState(null);
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { user } = useAuth();
  const listMovies = useAppSelector((state) => state.movies);

  const fetchDetail = useCallback(async () => {
    const response = await getDetailMovie(movieId);
    if (response !== undefined) {
      setDetail(response);
    }
  }, [movieId]);

  useEffect(() => {
    fetchDetail();
  }, [fetchDetail]);

  if (detail === null) {
    return <h1>Loading </h1>;
  }

  return (
    <div className="bg-black overflow-x-hidden">
      <Hero movie={detail} />

      <Container>
        <MovieList data={listMovies.nowPlaying} label="Now Playing" />
        <MovieList data={listMovies.trending} label="Trending" />
        <MovieList data={listMovies.topRated} label="Top Rated" />
        <MovieList data={listMovies.upcoming} label="Upcoming" />
      </Container>
    </div>
  );
};

export default MovieDetail;
