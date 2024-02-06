import React, { useState } from 'react';
import '../components/Login.css';
import Home from './Home.jsx'; 
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ "Email": "", "password": "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);  

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
      setIsLoggedIn(true);
      toast.success("Logged in successfully!")
  }

  if (isLoggedIn) {
    return <Home/>;
  }

  return (
    <div className='loginform'>
      <div className='topbuttons'>
        <button>Sign Up</button>
        <button onClick={submitHandler}>Sign In</button>
      </div>

      <form>
        <label htmlFor='Email'>Email</label>
        <br></br>
        <input
          type="text"
          placeholder='Enter Email'
          name="Email"
          onChange={changeHandler}
          value={formData.Email}
        />

        <br></br>
        <label htmlFor='password'>Password</label>
        <br></br>
        <input
          type="password"
          placeholder='Enter Password'
          name="password"
          onChange={changeHandler}
          value={formData.password}
        />

      </form>
      <br></br>

      <button onClick={submitHandler}>  <Link to="/home">Submit</Link></button>

      <div className='bottomrow'>
          <p>- Or sign in with - </p>
          <img src='../Google - Original.svg' alt="Google Logo"></img>
      </div>
    </div>
  );
};

export default Login;
