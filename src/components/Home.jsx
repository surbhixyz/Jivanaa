import React from 'react';
import Navbar from './Navbar.jsx';
import './Home.css';
import { Link } from 'react-router-dom';


const Home = () => {

    function handlClick() {

    }
    return (

        <div>
            <Navbar />

            <div className='row-container'>

                <div className='row1'>
                    <Link to="/edu-hub"><img src='../images/25.png' ></img></Link>
                    <Link to="/community"><img src='../images/14.png' ></img></Link>
                    <Link to="/service-aid"><img src='../images/23.png' ></img></Link>
                </div>

                <div className='row2'>
                    <Link to="/virtual-consult"><img src='../images/49.png' ></img></Link>
                    <Link to="/reminder-insights"><img src='../images/32.png' ></img></Link>
                    <Link to="/family-planning"><img src='../images/27.png' ></img></Link>
                </div>

            </div>

            <div className='chatbot-icon'><Link to="/chatbot"><img src='../images/chatbot.png' ></img></Link></div>
        </div>
    );
};

export default Home;
