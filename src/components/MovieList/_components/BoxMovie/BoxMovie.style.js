import tw, { styled } from "twin.macro";

export const MovieContainer = styled.div`
  ${tw`
    inline-block cursor-pointer relative p-2
  `}

  img {
    ${tw`w-full h-auto block`};
  }
`;

export const MovieInfo = styled.div`
  ${tw`absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white`}

  p.title {
    ${tw`whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center`}
  }

  a {
    ${tw`font-semibold text-lg text-black hover:text-blue-500`}
  }

  span.date {
    ${tw`text-gray-500 text-lg`}
  }
`;
