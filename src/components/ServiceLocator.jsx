import React, { useState } from 'react';
import MapContainer from './MapContainer'; // Assuming you have a Map component
import "./ServiceLocator.css";
import Navbar from './Navbar';

const ServiceLocator = () => {
   const[showmap,setshowmap]=useState(false);
   const[lat,setlat]=useState('');
   const[lng,setlng]=useState('');

async function gotlocation(position){
    setlat(position.coords.latitude);
    setlng(position.coords.longitude);
    setshowmap(true);
}
async function failedtoget(){
    console.log("error");
}

async function clickHandler(){
  navigator.geolocation.getCurrentPosition(gotlocation,failedtoget);
}

  return (
    <div className='map'>
       <Navbar></Navbar>
      <div className='service_head'>
       
        <h4>Service and Aid Locator</h4>
       
      </div>
      <h3> Locate reproductive health care services in your vicinity!</h3>
      <div className='loc_form'>
        <div className='gmap_input'>
        <button onClick={clickHandler}>Find Services Near Me </button>
          <img src="./images/google_maps.png" alt="Google Maps Icon" />
        </div>
        <div></div>
        {lat !== null && lng !== null && <MapContainer lat={lat} lng={lng} showmap={showmap} />}
      </div>
    </div>
  );
};

export default ServiceLocator;





