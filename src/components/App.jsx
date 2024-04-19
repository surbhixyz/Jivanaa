import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import './App.css'

const App = () => {
  return (
    <div className='app-container'>


      <div className='content'>

        <div className='right-buttons'>
          <Link to="/login">
            <button className='login'>Login</button>
          </Link>
          <Link to="/signup">
            <button className='signup'>Sign Up</button>
          </Link>
        </div>
        <div className='landing-txt'>
          <h1>Jivanaa</h1>
          <p>Fostering Universal Reproductive Health & Elevating Sex Education</p>

        </div>
      </div>

    </div>

  );
};

export default App;
