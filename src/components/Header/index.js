import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../configs/firebase";
import useAuth from "../../hooks/useAuth";
import { HeaderContainer, NavContainer, ActionContainer } from "./Header.style";
import logo from "../../assets/logo.svg";
import smallAvatar from "../../assets/small-avatar.png";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { useEffect, useState } from "react";
import { navList } from "./Header.enum";
import { IoMdArrowDropdown } from "react-icons/io";

const Header = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  const [isScroll, setIsScroll] = useState(false);
  const [isShowDropdown, setIsShowDropdown] = useState(false);

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
      navigate("/login");
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
          <FiSearch />
        </button>
        <button
          type="button"
          onClick={() => setIsShowDropdown(!isShowDropdown)}
          className="relative flex items-center space-x-2"
        >
          <img src={smallAvatar} alt="small avatar" className="avatar" />
          <IoMdArrowDropdown className=" text-2xl text-white" />

          {isShowDropdown && (
            <div
              className={`w-[13rem] flex flex-col text-left items-start gap-1 absolute right-0 top-12 z-50  text-white bg-black/70`}
            >
              <button onClick={handleLogout} className="w-full px-5 py-3 text-left hover:bg-black">
                View Profile
              </button>
              {isLogin ? (
                <button
                  onClick={handleLogout}
                  className="w-full px-5 py-3 text-left hover:bg-black"
                >
                  Sign out
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="w-full px-5 py-3 text-left hover:bg-black"
                >
                  Sign in
                </button>
              )}
            </div>
          )}
        </button>
      </ActionContainer>
    </HeaderContainer>
  );
};

export default Header;
