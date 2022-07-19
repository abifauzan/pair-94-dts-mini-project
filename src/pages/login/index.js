import React, { useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../configs/firebase";
import useAuth from "../../hooks/useAuth";

const defaultValue = {
  email: "",
  password: "",
};

const Login = () => {
  const [input, setInput] = useState(defaultValue);
  const [errorMessage, setErrorMessage] = useState("");

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
      const sendLoginData = await signInWithEmailAndPassword(auth, input.email, input.password);
      console.log("sendLoginData", sendLoginData);
      navigate(state?.from || "/");
    } catch (error) {
      console.log("error", error);
      // setErrorMessage(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2> Login Page </h2>
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
        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            navigate("/register", { state });
            // navigate("/register");
          }}
        >
          Register
        </button>
        <hr />
      </div>
      <div>{errorMessage}</div>
    </form>
  );
};

export default Login;
