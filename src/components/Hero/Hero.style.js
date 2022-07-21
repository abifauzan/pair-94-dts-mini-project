import tw, { styled } from "twin.macro";
import { BASE_IMG_BG_URL } from "../../utils/constant";

export const MovieDetailContainer = styled.div`
  ${(props) => `background-image: url('${BASE_IMG_BG_URL}${props.background}');`}

  ${tw`
    flex px-10 sm:px-20  relative items-center bg-cover bg-center h-[90vh] rounded-b-xl
  `}
`;
