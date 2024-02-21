import React from "react";
import Navbar from "./Navbar.jsx";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  function handlClick() { }
  return (
    <div className='home-full'>
      <Navbar />

      <div className="row-container">
        <div className="row1">
          <Link to="/edu-hub" className="image-link">
            <img src="../images/edu hub.png"></img>
          </Link>
          <Link to="/community" className="image-link">
            <img src="../images/community connect.png"></img>
          </Link>
          <Link to="/stay-tuned" className="image-link">
            <img src="../images/service locator.png"></img>
          </Link>
        </div>

        <div className="row2">
          <Link to="/stay-tuned" className="image-link">
            <img src="../images/reminder.png"></img>
          </Link>
          <Link to="/stay-tuned" className="image-link">
            <img src="../images/virtual health consult.png"></img>
          </Link>
          <Link to="/chatbot" className="image-link">
            <img src="../images/AI.png"></img>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;
