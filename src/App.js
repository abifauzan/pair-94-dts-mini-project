import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { setTheme } from "./redux/general/app";
import GlobalStyles from "./GlobalStyles";

function App() {
  const { theme } = useAppSelector((state) => state.app);
  const listMovies = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  console.log("listMovies", listMovies);

  const toggleTheme = () => {
    const valueTheme = theme === "dark" ? "light" : "dark";

    dispatch(setTheme(valueTheme));
  };

  return (
    <div>
      <GlobalStyles />
      <Header />

      <button onClick={toggleTheme}>Toggle Theme</button>
      <Outlet />

      <p>Theme: {theme}</p>
    </div>
  );
}

export default App;
