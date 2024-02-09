
import React, { useState } from 'react';
import '../components/SignUp.css';
import Login from './Login.jsx'; 
import { toast } from 'react-toastify';

const SignUp = () => {

  const [formData, setFormData] = useState({ "Email": "", "password": "", "confirmPassword": "" })
  const [matched, setIsMatched] = useState(false);  

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    if(formData.password===formData.confirmPassword){
      setIsMatched(true)
      toast.success("Signed In Successfully")
    }
    else{
      toast.error("Passwords do not match.")
    }
    
  }

  if (matched) {
    return <Login/>;
  }

  return (
    <div className='loginform'>
      <div className='topbuttons'>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>

      <form onSubmit={submitHandler}>
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

        <br></br>
        <label htmlFor='password'>Confirm Password</label>
        <br></br>
        <input
          type="password"
          placeholder='Confirm Password'
          name="confirmPassword"
          onChange={changeHandler}
          value={formData.confirmPassword}
        />

      </form>
      <br></br>

      <button onClick={submitHandler}>Submit</button>

      <div className='bottomrow'>
        <p>- Or sign in with - </p>
        <img src='../images/Google - Original.svg'></img>
      </div>
    </div>
  );
};

export default SignUp;
