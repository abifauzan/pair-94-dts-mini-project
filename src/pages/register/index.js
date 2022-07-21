import React, { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase";
import logo from "../../assets/logo.svg";

const defaultValue = {
  email: "",
  password: "",
};

const Register = () => {
  const [input, setInput] = useState(defaultValue);
  const [errorMessage, setErrorMessage] = useState("");

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
      const registerData = await createUserWithEmailAndPassword(auth, input.email, input.password);
      console.log("registerData", registerData);
      // navigate("/");
    } catch (error) {
      console.log("error", error);
      // setErrorMessage(error);
    }
  };

  /* return (
    <form onSubmit={handleSubmit}>
      <h2> Register Page </h2>
      <div>
        <p>Email:</p>
        <input
          onChange={(event) => handleInputChange(event.target.value, "email")}
          type="email"
          name="email"
          placeholder="Enter email..."
        />
      </div>
      <div>
        <p>Password:</p>
        <input
          onChange={(event) => handleInputChange(event.target.value, "password")}
          type="password"
          name="password"
          placeholder="Enter password..."
        />
      </div>
      <div>
        <hr />
        <button type="submit">Register</button>
        <button
          type="button"
          onClick={() => {
            navigate("/login", { state });
            // navigate("/register");
          }}
        >
          Login
        </button>
        <hr />
      </div>
      <div>{errorMessage}</div>
    </form>
  ); */
  const externalImage = "https://rb.gy/p2hphi";
  return (
  <div 
    className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent"
    style={{
      backgroundImage: `url(${externalImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      layout: 'fill',
      objectFit: 'cover',
    }}
  >
        
        
        <img
          src={logo}
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={100}
          height={100}
        /> 

        <form onSubmit={handleSubmit}
          className="relative mt-24 space-y-8 rounded bg-black/60 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-4xl text-white font-semibold">Sign Up Now</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
            <input 
              onChange={(event) => handleInputChange(event.target.value, "email")} 
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              } 
              type="email" name="email" placeholder="Enter email..." />
            </label>
            <label className="inline-block w-full">
            <input onChange={(event) => handleInputChange(event.target.value, "password")} 
              className={
                "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              } 
              type="password" name="password" placeholder="Enter password..." />
            </label>
          </div>

        <button className="w-full rounded bg-[#E50914] py-3 font-semibold text-white">Sign Up</button>

        <div className="text-[gray]">
          Already have account?{'  '}
          <button
            type="submit"
            className="cursor-pointer text-white hover:underline"
            onClick={() => {
              navigate("/login", { state });
              // navigate("/register");
            }}>
            Sign In Now
          </button>
        </div>
        </form>
    </div>
  );

};

export default Register;
