import { MovieListContainer } from "./MovieList.style";
import BoxMovie from "./_components/BoxMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMemo } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { FaSpinner } from "react-icons/fa";

const MovieList = ({ data, label }) => {
  const movieList = useMemo(() => data?.data?.results, [data]);

  if (data?.loading) {
    return <FaSpinner className="animate-spin" size={40} />;
  }

  return (
    <MovieListContainer>
      <h2> {label} </h2>

      {movieList?.length && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView="auto"
          breakpoints={{
            640: {
              slidesPerView: "auto",
            },
            768: {
              slidesPerView: "auto",
            },
            1024: {
              slidesPerView: "auto",
            },
          }}
        >
          {movieList?.map((item) => (
            <SwiperSlide key={item?.title}>
              <BoxMovie movie={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </MovieListContainer>
  );
};

export default MovieList;
