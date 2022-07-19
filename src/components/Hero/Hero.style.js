import tw, { styled } from "twin.macro";

export const HeroContainer = styled.div`
  ${tw`
    p-8
    h-[60vh]
    md:h-[80vh]
    w-full
  `}
  ${(props) => `background: url('https://image.tmdb.org/t/p/original${props.background}');`}
  background-size: cover !important;
  background-position: center;
`;

export const HeroTitle = styled.h1`
  ${tw`
    text-3xl
    md:text-7xl
    font-bold
    mb-4
    mt-[10vh]
    md:mt-[30vh]
  `}
`;

export const HeroDescription = styled.p`
  ${tw`
    font-normal
    md:font-medium
    text-lg
    md:text-2xl
    mb-4
    w-full
    md:w-[45rem]
  `}
  max-width: 80vw;
  line-height: 1.3;
`;

export const HeroButton = styled.button`
  ${tw`
    cursor-pointer
    font-bold
    rounded
    px-6
    md:px-8
    py-2
    mr-4
    md:text-lg
  `}

  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    background-color: #e6e6e6;
    color: black;
    transition: all 0.2s;
  }
`;
