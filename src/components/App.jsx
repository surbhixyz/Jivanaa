import React from "react";
import EduHub from "./EduHub";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import '../index.css'

function App(){

    return (<div>
        <BrowserRouter>
       <EduHub></EduHub>
       </BrowserRouter>
    </div>
    );
}

export default App;