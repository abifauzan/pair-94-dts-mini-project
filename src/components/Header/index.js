import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../configs/firebase";
import useAuth from "../../hooks/useAuth";
import { HeaderContainer, NavContainer, ActionContainer } from "./Header.style";
import logo from "../../assets/logo.svg";
import smallAvatar from "../../assets/small-avatar.png";
import { AiOutlineMenu } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";
import { useEffect, useState } from "react";
import { navList } from "./Header.enum";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <HeaderContainer isScroll={isScroll}>
      <div className="flex gap-3 md:gap-6">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <NavContainer>
          {navList.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}

          <Link to={"#"} className="mobile-only">
            Browse
            <AiFillCaretDown />
          </Link>
        </NavContainer>
      </div>

      <ActionContainer>
        <button type="button" onClick={handleLogout}>
          <BsSearch />
        </button>
        <button type="button" onClick={handleLogout}>
          <img src={smallAvatar} alt="small avatar" className="avatar" />
        </button>
      </ActionContainer>
    </HeaderContainer>
  );
};

export default Header;
