import React from 'react';
import './EduHub.css';
import Navbar from './Navbar';

const EduHub = () => {
    return (
        <div className='fullpage'>
            <Navbar />

            <div className='Category'>

                <h3>STIs and Testing Myths</h3>
                <h3>Government Policies & Schemes</h3>
                <h3 id='current'>Reproducation</h3>
                <h3>Crisis Helplines</h3>
                <h3>LGBTQ+</h3>
                <h3>Myth Buster</h3>
            </div>

            <div className='row-container'>

                <p>Self Help Courses</p>
                <div className='video'>
                    <img src='../images/Big Card (1).png' ></img>
                    <img src='../images/Big Card (2).png' ></img>
                    <img src='../images/Big Card (3).png' ></img>
                    <p>See All</p>
                </div>


                <p>Recommended Articles</p>
                <div className='article'>
                    <img src='../images/Small Cards.png' ></img>
                    <img src='../images/Small Cards (1).png' ></img>
                    <img src='../images/Small Cards (2).png' ></img>
                    <img src='../images/Small Cards (3).png' ></img>
                    <img src='../images/Small Cards (4).png' ></img>
                    <img src='../images/Small Cards (5).png' ></img>
                    <p>See All</p>
                </div>

                <p>Explore Podcasts</p>
                <div className='podcast'>
                    <img src='../images/Player Image.png' ></img>
                    <img src='../images/Player Image.png' ></img>
                    <img src='../images/Player Image.png' ></img>
                    <img src='../images/Player Image.png' ></img>
                    <p>See All</p>
                </div>
            </div>
        </div>
    );
};

export default EduHub;