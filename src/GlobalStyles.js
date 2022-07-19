// src/styles/GlobalStyles.js
import React from "react";
import { createGlobalStyle } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

const CustomStyles = createGlobalStyle`
  body {
    ${tw`bg-gray-50 text-white antialiased`};
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
