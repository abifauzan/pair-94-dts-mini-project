import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

const defaultValue = {
  email: "",
  password: "",
};

const Register = () => {
  const [input, setInput] = useState(defaultValue);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

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

  return (
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
        <hr />
      </div>
      <div>{errorMessage}</div>
    </form>
  );
};

export default Register;
