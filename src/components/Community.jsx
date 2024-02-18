import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import WidgetBot from "@widgetbot/react-embed";
import "./Community.css";

function Community() {
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
        <button className="btn">JOIN NOW</button>
      </a>
    </div>
  );
}

export default Community;
