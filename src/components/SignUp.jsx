import React, { useState } from "react";
import "../components/SignUp.css";
import Login from "./Login.jsx";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GoogleButton } from "react-google-button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    Email: "",
    password: "",
    confirmPassword: "",
  });
  const [matched, setIsMatched] = useState(false);

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    // Validate email, password, and confirmPassword
    if (!formData.Email || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all the fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // If validation passes, set matched to true and show success message
    setIsMatched(true);
    toast.success("Signed In Successfully");
  }

  if (matched) {
    return <Login />;
  }

  return (
    <div className="loginform">
      <div className="topbuttons">
        <button id="signup">SIGN UP</button>
        <Link to="/login">
          <button id="signin">SIGN IN</button>
        </Link>
      </div>

      <form onSubmit={submitHandler}>
        <label htmlFor="Email">Email</label>

        <input
          type="text"
          placeholder="Enter Email"
          name="Email"
          onChange={changeHandler}
          value={formData.Email}
        />

        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={changeHandler}
          value={formData.password}
        />

        <label htmlFor="password">Confirm Password</label>

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={changeHandler}
          value={formData.confirmPassword}
        />

        <button id="submit" onClick={submitHandler}>
          SIGN UP
        </button>
      </form>

      <div className="bottomrow">
        <div className="google-btn">
          <GoogleButton />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
