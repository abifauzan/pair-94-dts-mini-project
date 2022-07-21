import { Link, useNavigate } from "react-router-dom";
import { BASE_IMG_URL } from "../../../../utils/constant";
import { MovieContainer, MovieInfo } from "./BoxMovie.style";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const BoxMovie = ({ movie }) => {
  const to = `/movie/${movie.id}`;
  const navigate = useNavigate();

  const movePage = () => {
    navigate(to);
  };

  return (
    <MovieContainer className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`${BASE_IMG_URL}/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <MovieInfo
        onClick={movePage}
        className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white"
      >
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>
        <p>
          <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          {/* {like ? (
            <FaHeart className='absolute top-4 left-4 text-gray-300' />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-gray-300' />
          )} */}
        </p>
      </MovieInfo>
    </MovieContainer>
  );
};

export default BoxMovie;
