import { Navigate, useLocation } from "react-router-dom";
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
