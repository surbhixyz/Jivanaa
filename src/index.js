import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./components/App.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Home from "./components/Home.jsx";
import GetInvolved from "./components/getInvolved.jsx";
import AskExpert from "./components/AskExpert.jsx";
import EduHub from "./components/EduHub.jsx";
import Error from "./components/Error.jsx";
import Profile from "./components/profile.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chatbot from "./components/Chatbot.jsx";
import Community from "./components/Community.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";
import { AuthContextProvider } from "./components/Auth/AuthContext.js";

const AppRouter = () => {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/*" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/ask-expert" element={<AskExpert />} />
          <Route path="/edu-hub" element={<EduHub />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />

          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById("root")
);
