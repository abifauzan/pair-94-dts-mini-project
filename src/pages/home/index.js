import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();

  return <div>Home Page</div>;
};

export default Home;
