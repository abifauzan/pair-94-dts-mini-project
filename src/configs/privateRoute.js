import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase";

const PrivateRoute = ({ children, isFromLogin = false }) => {
  const [user] = useAuthState(auth);
  const { pathname = "" } = useLocation();

  // if (user && isFromLogin) return <Navigate to="/" />;
  // else if (user && isFromLogin === false) return children;
  // return <Navigate to="/login" state={{ from: pathname }} />;

  const render = useMemo(() => {
    if (user && isFromLogin) return "go to home";
    else if (user && isFromLogin === false) return "go to children";
    return "go to login";
  }, [user, isFromLogin]);

  console.log(render);

  return children;
};

export default PrivateRoute;
