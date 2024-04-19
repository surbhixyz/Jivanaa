
import React from 'react';
import "./Card.css"

const Card = ({id,Name,Desc,imagesrc,vlink,Lang,cardinfo,Helpline}) => {
  return (
    <div className='whole_card'>
    {cardinfo  ==='Government Policies & Schemes' ?(
       <a id="gov_anch" href={vlink} target='blank'><div className="fullCard">

      <div id='img_text'>
      <img src={imagesrc}/>
       <span id='name'>{Name}</span>
       </div>
       <span id='desc'>{Desc}</span>
       {Helpline && (
        <span id='Help'>
          <strong>Help-line : {Helpline}</strong>
        </span>
      )}
       {Lang &&(
        <span>Language :{Lang}</span>
       )} 

        </div>
       </a>
    ):cardinfo  ==='Myth Buster'?(
    
    <div className='myth'>
       <a id="myth_anch" href={vlink} target='blank'><div className="fullCard">
        
      <div id='img_myth'>
       <span id='name'>{Name}</span>
       </div>
       
      <img src={imagesrc}/>
      <span id="etc_text">Curious? Take a glance!</span>
        Language :{Lang}
        </div>
       </a>
    </div>
    
    ):(
    <a id="anch" href={vlink} target='blank'><div className="fullCard">
       <span id='name'>{Name}</span>
       <img src={imagesrc}/>
        Language :{Lang}
        </div>
    </a>
    )}
    </div>
  )  
};
export default Card;


