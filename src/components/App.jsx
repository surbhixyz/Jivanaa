import React from "react";
import EduHub from "./EduHub";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import '../index.css'
import LatLong from "./LatLong";



function App(){
    return (<div>
        <BrowserRouter>
        {/* <EduHub></EduHub> */}
     <LatLong></LatLong>
       </BrowserRouter>
    </div>
    );
}

export default App;