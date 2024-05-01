import React from 'react';
import "./Virtual_Consult.css"
import Navbar from './Navbar'; 
const Virtual_Consult = () => {
  return (
    <div>
    <Navbar/>
    <h5 className="tagline">Consult specialists virtually (24x7) , ensuring your health journey is both convenient and secure.</h5>
   <div className="consult_container">
    <div class="cons_card" >
  <div class="card-body">
    <div class="Sep">
   <img src="./images/doc1.jpg" class="consult_img" alt="..."></img>
   <h5> Dr.Vanita Sisodia</h5>
   <span style={{ fontSize: '12px','font-weight':'550'}}>Consultation fee<br/>Rs.290</span>
   </div>
   <span className="card-title" style={{ textAlign: 'center' }}>MBBS, MD - Obstetrics & Gynaecology (15 years of experience)</span>
   <hr></hr>
   <div className="side-bar">
    <span class="card-text"><strong>Specializations :</strong> Gynecological Infections,Antenatal and Postnatal Care,Breast and Lactation Advise,Hormonal Disorders</span>
    <button className="consult_btn"><a href="#" class="btn-primary">Consult Now</a></button>
    </div>
  </div>
</div>

<div class="cons_card" >
  <div class="card-body">
    <div class="Sep">
   <img src="./images/doc7.jpeg" class="consult_img" alt="..."></img>
   <h5> Dr. Pranjali Maru</h5>
   <span style={{ fontSize: '12px','font-weight':'550'}}>Consultation fee<br/>Rs.290</span>
   </div>
   <span className="card-title" style={{ textAlign: 'center' }}>MBBS, DGO - Obstetrics & Gynaecology, DNB - Obstetrics & Gynaecology (10 years of experience)</span>
   <hr></hr>
   <div className="side-bar">
    <span class="card-text"><strong>Specializations : </strong>Gynaecological Infections,Breast and Lactation Advise,Hormonal Disorders,Antenatal and Postnatal Care</span>
    <button className="consult_btn"><a href="#" class="btn-primary">Consult Now</a></button>
    </div>
  </div>
</div>

<div class="cons_card" >
  <div class="card-body">
    <div class="Sep">
   <img src="./images/doc2.webp" class="consult_img" alt="..."></img>
   <h5> Dr. Deepika Rana</h5>
   <span style={{ fontSize: '12px','font-weight':'550'}}>Consultation fee<br/>Rs.290</span>
   </div>
   <span className="card-title" style={{ textAlign: 'center' }}>MBBS, DNB - Obstetrics & Gynaecology (12 years of experience)</span>
   <hr></hr>
   <div className="side-bar">
    <span class="card-text"><strong>Specializations : </strong>Gynecological Infections,Antenatal and Postnatal Care,Breast and Lactation Advise,Hormonal Disorders</span>
    <button className="consult_btn"><a href="#" class="btn-primary">Consult Now</a></button>
    </div>
  </div>
</div>


<div class="cons_card" >
  <div class="card-body">
    <div class="Sep">
   <img src="./images/doc4.jpeg" class="consult_img" alt="..."></img>
   <h5> Dr.Renu Saxena</h5>
   <span style={{ fontSize: '12px','font-weight':'550' }}>Consultation fee<br/>Rs.290</span>
   </div>
   <span className="card-title" style={{ textAlign: 'center' }}>MBBS, MD - Obstetrics & Gynaecology, Fellowship in Reproductive Medicine (13 years of experience)</span>
   <hr></hr>
   <div className="side-bar">
    <span class="card-text"><strong>Specializations :</strong> Gynecological Infections,Antenatal and Postnatal Care,Breast and Lactation Advise,Hormonal Disorders</span>
    <button className="consult_btn"><a href="#">Consult Now</a></button>
    </div>
  </div>
</div>

<div class="cons_card" >
  <div class="card-body">
    <div class="Sep">
   <img src="./images/doc4.webp" class="consult_img" alt="..."></img>
   <h5>Dr. Gitanjali </h5>
   <span style={{ fontSize: '12px','font-weight':'550' }}>Consultation fee<br/>Rs.290</span>
   </div>
   <span className="card-title" style={{ textAlign: 'center' }}>MBBS, MS - Obstetrics & Gynaecology (32 years of experience)</span>
   <hr></hr>
   <div className="side-bar">
    <span class="card-text"><strong>Specializations : </strong> Gynecological Infections,Antenatal and Postnatal Care,Breast and Lactation Advise,Hormonal Disorders</span>
    <button className="consult_btn"><a href="#" class="btn-primary">Consult Now</a></button>
    </div>
  </div>
</div>


<div class="cons_card" >
  <div class="card-body">
    <div class="Sep">
   <img src="./images/doc5.jpeg" class="consult_img" alt="..."></img>
   <h5> Dr.Priyanka Yadav</h5>
   <span style={{ fontSize: '12px','font-weight':'550' }}>Consultation fee<br/>Rs.290</span>
   </div>
   <span className="card-title" style={{ textAlign: 'center' }}>MBBS, DNB, MS - Obstetrics & Gynaecology (15 years of experience)</span>
   <hr></hr>
   <div className="side-bar">
    <span class="card-text"><strong>Specializations : </strong>Gynaecology, Gynecological Infections,Infertility, Antenatal and Postnatal care,Hormonal Disorders</span>
    <button className="consult_btn"><a href="#" class="btn-primary">Consult Now</a></button>
    </div>
  </div>
</div>

<div class="cons_card" >
  <div class="card-body">
    <div class="Sep">
   <img src="./images/doc6.jpeg" class="consult_img" alt="..."></img>
   <h5> Dr.Shreya Nagpal</h5>
   <span style={{ fontSize: '12px','font-weight':'550' }}>Consultation fee<br/>Rs.290</span>
   </div>
   <span className="card-title" style={{ textAlign: 'center' }}>MBBS, DNB, MS - Obstetrics & Gynaecology (11 years of experience)</span>
   <hr></hr>
   <div className="side-bar">
    <span class="card-text"><strong>Specializations : </strong>Gynaecology, Gynecological Infections,Infertility, Antenatal and Postnatal care</span>
    <button className="consult_btn"><a href="#" class="btn-primary">Consult Now</a></button>
    </div>
  </div>
</div>
 </div>

 </div>
  );
};

export default Virtual_Consult;


