import React, { useState } from "react";

import { useNavigate, useLocation, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase";
import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.svg";
import Footer from "../../components/Footer";
const defaultValue = {
  email: "",
  password: "",
};

const Register = () => {
  const [input, setInput] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { state = {} } = useLocation();

  console.log(state);

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
      const registerData = await createUserWithEmailAndPassword(auth, input.email, input.password);
      console.log("registerData", registerData);
      // navigate("/");
    } catch (error) {
      console.log("error", error);
      // setErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };

  const registerComponent = (
    <div className=" text-white mx-auto p-16  bg-black/50 backdrop-blur-md rounded-2xl shadow-xl shadow-[#070000]  w-full sm:w-[460px] ">
      <h1 className=" text-white text-2xl font-medium mb-5">Sign Up</h1>
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
              Sign Up
            </button>
          </>
        )}
      </form>
      <p onClick={() => navigate("/login")} className=" cursor-pointer underline mt-5">
        Already have account ? <br />
        Sign in here
      </p>
      <div
        // onClick={() => signInWithGoogle()}
        className=" text-base cursor-pointer mt-5 space-x-1 flex items-center "
      >
        <p className=" underline">Sign up with Google</p> <FcGoogle className=" text-xl" />
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
        {registerComponent}
      </div>
      <Footer />
    </div>
  );
};

export default Register;
