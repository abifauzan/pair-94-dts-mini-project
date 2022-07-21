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

  console.info(listMovies);

  return (
    <div className="bg-black overflow-x-hidden">
      <MovieDetailContainer background={detail.backdrop_path}>
        <div className="absolute w-full h-52 bg-gradient-to-t from-black  to-transparent bottom-0 left-0 ring-0 z-20" />
        <div>
          <div data-aos="fade-up" className="w-3/4">
            <h1 className=" drop-shadow-lg text-white text-4xl sm:text-6xl font-bold">
              {detail.title}
            </h1>
            <div className=" flex space-x-2 mt-5 text-white font-semibold ">
              <div className=" flex items-center space-x-2 justify-center text-base text-center py-2 rounded-md bg-[#e50914]/90 active:scale-95 cursor-pointer w-36 ">
                <BsPlayFill />
                <p>Play</p>
              </div>
              <div className=" cursor-pointer flex items-center space-x-2 justify-center text-base text-center  py-2 rounded-md active:scale-95 bg-[#6d6d6e]/80  w-36 ">
                <FiInfo />
                <p> More info</p>
              </div>
            </div>
            <div className=" -z-20 w-[90%] sm:w-2/4 text-base  sm:text-2xl mt-5 text-white ">
              <p className=" line-clamp-3 drop-shadow-lg">{detail.overview}</p>
            </div>
          </div>
        </div>
      </MovieDetailContainer>

      <Container>
        <MovieList data={listMovies.upcoming} label="Upcoming" />
        <MovieList data={listMovies.topRated} label="Top Rated" />
        <MovieList data={listMovies.popular} label="Popular" />
      </Container>
    </div>
  );
};

export default MovieDetail;
