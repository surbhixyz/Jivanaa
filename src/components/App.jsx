import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const App = () => {
  return (
    <div>

      <div className='homepage'>
        <img src='images/Shape.svg' ></img>
      </div>

      <div className='right-buttons'>
        <Link to="/login">
          <button className='login'>Login</button>
        </Link>
        <Link to="/signup">
          <button className='signup'>Sign Up</button>
        </Link>
      </div>

      <div className='content'>
        <h1>Jivanaa</h1>
        <p>Fostering Universal Reproductive Health & Elevating Sex Education</p>
      </div>

    </div>

  );
};

export default App;
