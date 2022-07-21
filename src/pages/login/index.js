import React, { useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider, signInWithPopup } from "../../configs/firebase";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.svg";
import Footer from "../../components/Footer";

const defaultValue = {
  email: "",
  password: "",
};

const Login = () => {
  const [input, setInput] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { state = {} } = useLocation();

  // Handling on change input
  const handleInputChange = (value, type) => {
    setInput({
      ...input,
      [type]: value,
    });
  };

  // Handling submit button
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const sendLoginData = await signInWithEmailAndPassword(auth, input.email, input.password);
      console.log("sendLoginData", sendLoginData);
      navigate(state?.from || "/");
    } catch (error) {
      console.log("error", error);
      // setErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInComponent = (
    <div className=" text-white mx-auto p-16  bg-black/50 backdrop-blur-md rounded-2xl shadow-xl shadow-[#070000]  w-full sm:w-[460px] ">
      <h1 className=" text-white text-2xl font-medium mb-5">Sign In</h1>
      <form onSubmit={handleSubmit} className=" space-y-5 flex flex-col">
        <input
          className="outline-none rounded-md p-4 bg-[#333333]  "
          type="email"
          placeholder="Email"
          onChange={(event) => handleInputChange(event.target.value, "email")}
        />

        <input
          className=" outline-none rounded-md p-4 bg-[#333333]  "
          type="password"
          placeholder="Password"
          onChange={(event) => handleInputChange(event.target.value, "password")}
        />
        {loading ? (
          <button
            type="submit"
            className=" active:scale-95 mt-3 text-white  rounded-md font-semibold p-4 w-full bg-[#e50914]"
          >
            Loading...
          </button>
        ) : (
          <>
            <button
              type="submit"
              className=" active:scale-95 mt-3 text-white  rounded-md font-semibold p-4 w-full bg-[#e50914]"
            >
              Sign In
            </button>
          </>
        )}
      </form>
      <p onClick={() => navigate("/register")} className=" cursor-pointer underline mt-5">
        Don't have account ? <br />
        Register here
      </p>
      <div
        onClick={() => signInWithGoogle()}
        className=" text-base cursor-pointer mt-5 space-x-1 flex items-center "
      >
        <p className=" underline">Sign in with Google</p> <FcGoogle className=" text-xl" />
      </div>

      <p className=" mt-10 text-xs">
        This page is protected by Google{" "}
        <span className=" underline cursor-pointer" title="reCAPTCHA">
          reCAPTCHA
        </span>{" "}
        to ensure you're not a bot. Learn more.
      </p>
    </div>
  );

  return (
    <div className="bg-black">
      <div className="bg-black md:bg-welcome h-screen">
        {/* Header */}
        <div className=" flex px-5 sm:px-10 items-center justify-between">
          <Link to="/">
            <div>
              <img className="cursor-pointer w-28  md:w-28" src={logo} alt="Logo" />
            </div>
          </Link>
          <div></div>
        </div>
        {/* Content */}
        {signInComponent}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
