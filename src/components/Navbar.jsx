import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='options'>
        
        <ul>
          <li> <NavLink to='/home' activeClassName='active'>Home</NavLink></li>
          <li> <NavLink to='/get-involved' activeClassName='active'>Get Involved</NavLink></li>
          <li> <NavLink to='/ask-expert' activeClassName='active'>Ask Expert</NavLink></li>
          <li> <NavLink to='/about-us' activeClassName='active'>About Us</NavLink></li>
          <li> <NavLink to='/contact' activeClassName='active'>Contact</NavLink></li>
        </ul>
      </div>

      <div className='profile'>
        <div className='profile-info'>
          <span className='profile-name'>Rhea</span>
          <img src='../images/Vector.svg' alt='Dropdown' className='dropdown-icon' />
          <img src='../images/rhea.svg' alt='Profile' className='profile-photo' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
