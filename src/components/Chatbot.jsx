import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Chatwindow from "./Chatwindow.jsx";

function Chatbot() {
  return (
    <div>
      <Navbar />
      <Chatwindow></Chatwindow>
    </div>
  );
}

export default Chatbot;
