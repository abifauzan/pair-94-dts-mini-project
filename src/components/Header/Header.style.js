import tw, { styled } from "twin.macro";

export const HeaderContainer = styled.div`
  ${tw`
    flex
    justify-between
    items-center
    fixed
    w-full
    top-0
    transition-all
    z-10
    text-lg
    bg-gradient-to-b z-50 from-black 
    space-x-5
    py-4
    px-10
  `}

  ${tw`md:h-[68px] md:py-10 md:px-20 md:text-lg`}

  ${(props) => (props.isScroll ? tw`bg-black` : "")}

  img.logo {
    ${tw`
      w-[35px] md:w-[40px] h-full
    `}
  }

  img.avatar {
    ${tw`
      w-[35px] md:w-[40px] h-full
    `}
  }
`;

export const NavContainer = styled.div`
  ${tw`flex gap-2 md:gap-5 items-center text-center md:pr-2`}

  a {
    ${tw`hover:scale-105 transition-all`}
  }
  a:not(.mobile-only) {
    ${tw`
      hidden md:block
    `}
  }

  .mobile-only {
    ${tw`
      md:hidden flex items-center 
    `}

    svg {
      ${tw`
      ml-1 mt-[4px]
    `}
    }
  }
`;

export const ActionContainer = styled.div`
  ${tw`flex gap-4 md:gap-6`}

  svg {
    ${tw`w-[22px] h-[22px]`};
    ${tw`md:w-[29px] md:h-[29px]`};
  }
`;
