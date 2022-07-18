import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MovieDetail = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/login", { state: { from: "/movie-detail" } });
  // }, []);

  return <div>Movie Detail</div>;
};

export default MovieDetail;
