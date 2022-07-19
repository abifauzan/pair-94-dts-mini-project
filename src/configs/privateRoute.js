import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children, isFromLogin = true }) => {
  const { user, loading } = useAuth();
  const { pathname = "" } = useLocation();

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (!user && isFromLogin) {
    return <Navigate to="/login" state={{ from: pathname }} />;
  }

  if (user && !isFromLogin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
