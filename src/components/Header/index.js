import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../configs/firebase";
import useAuth from "../../hooks/useAuth";
import { HeaderContainer } from "./Header.style";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HeaderContainer dark={true}>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
