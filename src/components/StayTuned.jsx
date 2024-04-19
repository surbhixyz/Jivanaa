import React from 'react';
import './StayTuned.css';
import Navbar from './Navbar.jsx';

const StayTuned = () => {
    return (
        <div>
        <Navbar />
        <div className='staytuned-container'> 
        <img src='../images/Women Power - Keeping in Touch.png'></img>
        <p>Stay Tuned for More Updates</p>
        {/* <img src='../images/Women Power - Catching Up.png'></img> */}
        </div>
        </div>
    )};

export default StayTuned;