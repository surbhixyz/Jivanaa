import React from "react";
import EduHub from "./EduHub";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import '../index.css'
import ServiceLocator from "./ServiceLocator";



function App(){
    return (<div>
        <BrowserRouter>
       {/* <EduHub></EduHub> */}
     <ServiceLocator></ServiceLocator>
       </BrowserRouter>
    </div>
    );
}

export default App;