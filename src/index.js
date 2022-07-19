import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import MovieDetailPage from "./pages/movie-detail";
import NotFoundPage from "./pages/not-found";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./configs/privateRoute";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="movie/:slug"
                element={
                  <PrivateRoute>
                    <MovieDetailPage />
                  </PrivateRoute>
                }
              />
            </Route>
            <Route
              path="login"
              element={
                <PrivateRoute isFromLogin={false}>
                  <LoginPage />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PrivateRoute isFromLogin={false}>
                  <RegisterPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
