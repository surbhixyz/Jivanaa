import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import WidgetBot from "@widgetbot/react-embed";
import "./Community.css";

function Community() {
  const [cursor, setCursor] = useState("pointer");

  // Function to handle button click
  const handleClick = () => {
    // Change cursor to 'wait' when clicked
    setCursor("wait");

    // Do something here, for example, setTimeout to revert the cursor after some time
    setTimeout(() => {
      setCursor("pointer");
    }, 2000); // Revert cursor to 'pointer' after 2 seconds (2000 milliseconds)
  };

  const App = () => (
    <div className="bot">
      <WidgetBot
        server="1206923011400400896"
        channel="1206971997347913829"
        width={900}
        height={400}
      />
    </div>
  );

  return (
    <div>
      <Navbar />
      <text className="text-1">
        Join our vibrant, inclusive space to share stories, chat, and ask
        questions in a safe environment.
      </text>
      <App />
      <text className="text-2">
        Be yourself in our judgment-free zone, valuing inclusivity, respect, and
        kindness
      </text>
      <a
        href="https://discord.com/channels/1206923011400400896/1206971997347913829"
        target="_blank"
        className="button-container"
      >
        <button
          className="btn"
          style={{ cursor: cursor }}
          onClick={handleClick}
        >
          JOIN NOW
        </button>
      </a>
    </div>
  );
}

export default Community;
