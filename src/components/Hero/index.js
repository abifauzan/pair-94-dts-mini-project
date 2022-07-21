import { MovieDetailContainer } from "./Hero.style";
import { FiInfo } from "react-icons/fi";
import { BsPlayFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { apiRequest } from "../../configs/axios";
import { BASE_IMG_BG_URL } from "../../utils/constant";
import { FaSpinner } from "react-icons/fa";

const Hero = ({ movie = {} }) => {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const fetchLogo = async () => {
      const response = await apiRequest({
        path: `/movie/${movie?.id}/images`,
        method: "GET",
      });

      if (response) {
        const getEnVersion =
          response?.data?.logos?.filter((item) => item?.iso_639_1 === "en")[0]?.file_path ||
          response?.data?.logos[0]?.file_path;

        setLogo(`${BASE_IMG_BG_URL}/${getEnVersion}`);
      }
    };

    fetchLogo();
  }, [movie]);

  return (
    <MovieDetailContainer background={movie.backdrop_path}>
      <div className="absolute w-full h-52 bg-gradient-to-t from-black  to-transparent bottom-0 left-0 ring-0 z-20" />
      <div className="w-full">
        <div data-aos="fade-up" className="w-2/3">
          {/* <h1 className=" drop-shadow-lg text-white text-4xl sm:text-6xl font-bold">
            {movie.title}
          </h1> */}

          {logo === "" ? (
            <FaSpinner className="animate-spin" size={40} />
          ) : (
            <img src={logo} alt="logo title" className="w-[500px] pb-2" />
          )}
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
          <div className=" -z-20 w-[90%] sm:w-3/4 text-base  sm:text-2xl mt-5 text-white ">
            <p className=" line-clamp-3 drop-shadow-lg">{movie.overview}</p>
          </div>
        </div>
      </div>
    </MovieDetailContainer>
  );
};

export default Hero;
