import React, { useState, useEffect } from "react";
import { auth, provider } from "./Config.js";
import { signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import Home from "./Home.jsx";

const ConnectHome = () => (
  <div>
    <Link to="/home"></Link>
  </div>
);

function signIn() {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <div>
      <button onClick={handleClick}>Sign In with Google</button>
    </div>
  );
}

export default signIn;
