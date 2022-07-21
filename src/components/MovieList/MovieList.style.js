import tw, { styled } from "twin.macro";

export const MovieListContainer = styled.div`
  ${tw`text-white w-full`}

  h2 {
    ${tw`text-2xl font-semibold pb-3`}
  }

  .swiper-slide {
    ${tw`w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]`}
  }
`;
