import React, { useState, useEffect } from "react";
import "../components/SignUp.css";
import Login from "./Login.jsx";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "./Auth/AuthContext.js";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    Email: "",
    password: "",
    confirmPassword: "",
  });
  const [matched, setIsMatched] = useState(false);

  function changeHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    // Validate email, password, and confirmPassword
    if (!formData.Email || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all the fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    // If validation passes, set matched to true and show success message
    setIsMatched(true);
    toast.success("Signed In Successfully");
  }

  if (matched) {
    return <Login />;
  }

  const { googleSignIn, user } = UserAuth();

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className="full">
      <div className="loginform">
        <div className="topbuttons">
          <button id="signup">SIGN UP</button>
          <Link to="/login">
            <button id="signin">SIGN IN</button>
          </Link>
        </div>

        <form onSubmit={submitHandler}>
          <label htmlFor="email" id="white-txt">
            Email
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
          />
          <label htmlFor="password" id="white-txt">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={changeHandler}
            value={formData.password}
          />
          <label htmlFor="confirmPassword" id="white-txt">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={changeHandler}
            value={formData.confirmPassword}
          />{" "}
          <button id="submit_btn" type="submit">
            SIGN UP
          </button>
        </form>

        <br></br>

        <div className="bottomrow">
          <div className="google-btn">
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
      </div>
    </div>
  );
};

//   return (
//     <div className="loginform">
//       <div className="topbuttons">
//         <button id="signup">SIGN UP</button>
//         <Link to="/login">
//           <button id="signin">SIGN IN</button>
//         </Link>
//       </div>
//     <div className='full'>
//       <div className='loginform'>
//         <div className='topbuttons'>
//           <button id='signup'>SIGN UP</button>
//           <Link to="/login"><button id='signin'>SIGN IN</button></Link>
//         </div>

//       <form onSubmit={submitHandler}>
//         <label htmlFor="Email">Email</label>
//         </form>
//         <form onSubmit={submitHandler}>
//           <label htmlFor='Email' id='white-txt' >Email</label>

//         <input
//           type="text"
//           placeholder="Enter Email"
//           name="Email"
//           onChange={changeHandler}
//           value={formData.Email}
//         />
//           <input
//             type="text"
//             placeholder='Enter Email'
//             name="Email"
//             onChange={changeHandler}
//             value={formData.Email}
//           />

//         <label htmlFor="password">Password</label>

//           <label htmlFor='password' id='white-txt' >Password</label>

//         <input
//           type="password"
//           placeholder="Enter Password"
//           name="password"
//           onChange={changeHandler}
//           value={formData.password}
//         />
//           <input
//             type="password"
//             placeholder='Enter Password'
//             name="password"
//             onChange={changeHandler}
//             value={formData.password}
//           />

//         <label htmlFor="password">Confirm Password</label>

//           <label htmlFor='password' id='white-txt'>Confirm Password</label>

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           name="confirmPassword"
//           onChange={changeHandler}
//           value={formData.confirmPassword}
//         />
//           <input
//             type="password"
//             placeholder='Confirm Password'
//             name="confirmPassword"
//             onChange={changeHandler}
//             value={formData.confirmPassword}
//           />

//         <button id="submit" onClick={submitHandler}>
//           SIGN UP
//         </button>
//       </form>

//       <div className="bottomrow">
//         <p>- Or sign up with - </p>
//         <br></br>
//         <img src="../images/Google - Original.svg"></img>
//       </div>
//     </div>
//     </div>
//     </div>
//   );
// };

export default SignUp;
