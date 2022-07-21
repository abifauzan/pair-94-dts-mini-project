import { useEffect, useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../configs/firebase";

const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  const { pathname = "" } = useLocation();
  const navigate = useNavigate();

  const isLogin = useMemo(() => {
    return user ? true : false;
  }, [user]);

  // useEffect(() => {
  //   if (user && isFromLogin) navigate("/");
  // }, [user, isFromLogin, navigate]);

  return { user, loading, error, isLogin };
};

export default useAuth;
