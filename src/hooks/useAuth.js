import { useMemo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase";

const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);

  const isLogin = useMemo(() => {
    return user ? true : false;
  }, [user]);

  return { user, loading, error, isLogin };
};

export default useAuth;
