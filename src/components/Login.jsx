import React, { useState } from "react";
import "../components/Login.css";
import Home from "./Home.jsx";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import signIn from "./signIn.js";

const Login = () => {
  const [formData, setFormData] = useState({ Email: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    if (!formData.Email || !formData.password) {
      toast.error("Please fill in all the fields.");
      return;
    }

    setIsLoggedIn(true);

    toast.success("Logged in successfully!");
  }

  if (isLoggedIn) {
    return <Home />;
  }

  return (
    <div className="loginform">
      <div className="topbuttons">
        <Link to="/signup">
          <button id="signin">SIGN UP</button>
        </Link>
        <button id="signup" onClick={submitHandler}>
          SIGN IN
        </button>
      </div>

      <form>
        <label htmlFor="Email">Email</label>
        <br></br>
        <input
          type="text"
          placeholder="Enter Email"
          name="Email"
          onChange={changeHandler}
          value={formData.Email}
        />

        <br></br>
        <label htmlFor="password">Password</label>
        <br></br>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={changeHandler}
          value={formData.password}
        />

        <button id="submit" onClick={submitHandler}>
          {" "}
          SIGN IN
        </button>
      </form>
      <br></br>

      <div className="bottomrow">
        <p>- Or sign in with - </p>
        <img src="../images/Google - Original.svg" alt="Google Logo"></img>
      </div>
    </div>
  );
};

export default Login;
