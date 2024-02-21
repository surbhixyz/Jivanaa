import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { UserAuth } from "./Auth/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user == null) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="navbar-container">
      <div className="options">
        <ul>
          <li>
            {" "}
            <NavLink to="/home" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/get-involved" activeClassName="active">
              Get Involved
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/ask-expert" activeClassName="active">
              Ask Expert
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/about-us" activeClassName="active">
              About Jivanaa
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/contact" activeClassName="active">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="profile">
        <div className="profile-info">
          <div class="dropdown">

            <button class="button-with-image" type="button"></button>
            
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="/profile">
                  Profile
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#" onClick={handleSignOut}>
                  Log Out
                </a>
              </li>
            </ul>
          </div>
          <img
            src="../images/rhea.svg"
            alt="Profile"
            className="profile-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
