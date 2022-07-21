import { MovieListContainer } from "./MovieList.style";
import BoxMovie from "./_components/BoxMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMemo } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const MovieList = ({ data, label }) => {
  const movieList = useMemo(() => data?.data?.results, [data]);

  if (data?.loading) {
    return <h1> Loading </h1>;
  }

  return (
    <MovieListContainer>
      <h2> {label} </h2>

      {movieList?.length && (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView="auto"
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
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
