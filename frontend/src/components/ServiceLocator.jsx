import React, {useState} from 'react';
import MapContainer from './MapContainer'; 
import "./ServiceLocator.css";
import Navbar from './Navbar';

const ServiceLocator = () => {

   const[showmap,setshowmap]=useState(false);

   const[lat,setlat]=useState('');

   const[lng,setlng]=useState('');

const gotlocation= async (position) =>{
    setlat(position.coords.latitude);
    setlng(position.coords.longitude);
    setshowmap(true);
}
const failedToGet = (error) => {
    console.log("error");
}

const clickHandler = () => {
  navigator.geolocation.getCurrentPosition(gotlocation,failedToGet);
}

  return (
    <div className='map'>
       <Navbar></Navbar>
      
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
