import React from "react";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import MovieDetailPage from "./pages/movie-detail";
import NotFoundPage from "./pages/not-found";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./configs/privateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="login"
          element={
            <PrivateRoute isFromLogin>
              <LoginPage />
            </PrivateRoute>
          }
        />
        <Route
          path="register"
          element={
            <PrivateRoute isFromLogin>
              <LoginPage />
            </PrivateRoute>
          }
        />

        <Route
          path="movie/:slug"
          element={
            <PrivateRoute>
              <MovieDetailPage />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
