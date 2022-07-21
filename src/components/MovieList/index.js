import { MovieListContainer } from "./MovieList.style";
import BoxMovie from "./_components/BoxMovie";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMemo } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const movie = {
  adult: false,
  backdrop_path: "/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg",
  genre_ids: [12, 28, 878],
  id: 507086,
  original_language: "en",
  original_title: "Jurassic World Dominion",
  overview:
    "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
  popularity: 12919.366,
  poster_path: "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
  release_date: "2022-06-01",
  title: "Jurassic World Dominion",
  video: false,
  vote_average: 7,
  vote_count: 1743,
};

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
