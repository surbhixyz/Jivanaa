import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <div className="founders">
          <div>
            <img src="../images/surbhi-jivanaa.jpg"></img>
            <h1>Surbhi Sharma</h1>
            <p1>SWE intern @Microsoft'24 ,</p1>
            <br></br>
            <p1>CSE-AI Undergrad @IGDTUW</p1>
            <a
              href="https://www.linkedin.com/in/surbhi-sharma-5b4140245/"
              target="_blank"
            >
              <button>Connect on LinkedIn</button>
            </a>
          </div>

          <div>
            <img src="../images/harsheen-jivanaa.jpg"></img>
            <h1>Harsheen Kaur Sood</h1>
            <p1>Product intern @Adobe'24 ,</p1>
            <br></br>
            <p1>CSE-AI Undergrad @IGDTUW</p1>
            <a
              href="https://www.linkedin.com/in/harsheen-kaur-sood-2713691ab/"
              target="_blank"
            >
              <button>Connect on LinkedIn</button>
            </a>
          </div>

          <div>
            <img src="../images/priyanshi.jpg"></img>
            <h1>Priyanshi Chaudhary</h1>
            <p1>SWE intern @LinkedIn'24 ,</p1>
            <br></br>
            <p1>CSE-AI Undergrad @IGDTUW</p1>
            <a
              href="https://www.linkedin.com/in/priyanshi-chaudhary-8a025922a/"
              target="_blank"
            >
              <button>Connect on LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
