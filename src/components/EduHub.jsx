import React from 'react';
import './EduHub.css';
import Navbar from './Navbar';
import {Reprod_data_vids } from '../Reprod_data/Reprod_data_vids';
import {Reprod_data_article} from '../Reprod_data/Reprod_data_article';
import { Reprod_data_pods } from '../Reprod_data/Reprod_data_pods';
import { contra_data_article } from '../contra_data/contra_data_article';
import { contra_data_pods } from '../contra_data/contra_data_pods';
import { contra_data_vids } from '../contra_data/contra_data_vids';
import { gov_sch } from '../gov_sch_data/gov_sch';
import { gov_sch_facts } from '../gov_sch_data/gov__sch_facts';
import { Lgbt_data_article } from '../Lgbt_data/Lgbt_data_article';
import { Lgbt_data_vids } from '../Lgbt_data/Lgbt_data_vids';
import { Lgbt_data_pods } from '../Lgbt_data/Lgbt_data_pods';
import { crisis_helplines } from '../gov_sch_data/crisis_helplines';
import CardCollection from './CardCollection';
import { useState , useEffect } from 'react';
import { mythbust_article } from '../mythbust/mythbust_article';


const EduHub = () => {
    
   const[vidCategory, setvidCategory]=useState(null);
   const[artCategory,setartCategory]=useState(null);
   const[podCategory,setpodCategory]=useState(null);
   const[cardCategory,setcardCategory]=useState(null);
  
   useEffect(() => {
    VideoHandler(Reprod_data_vids);
    artHandler(Reprod_data_article);
    podHandler(Reprod_data_pods);
    categoryHandler('Sexual & Reproductive Health');
  },[]);
// using useEffect whenever the project is rendered for the first time these functions will happen

   const categoryHandler=(data)=>{

    setcardCategory(data);
   }

   const VideoHandler =(data)=>{
        setvidCategory(data);
    }

    const artHandler =(data)=>{
          setartCategory(data);
    }
    
    const podHandler=(data)=>{
        setpodCategory(data);
    }
    return (
        <div className='fullpage'>

            <Navbar />
            
            <div className='Category'>

                <button onClick={()=>{VideoHandler(contra_data_vids); artHandler(contra_data_article);podHandler(contra_data_pods) ; categoryHandler('Contraceptives, STIs & Testing') }}  style={{ background: cardCategory === 'Contraceptives, STIs & Testing' ? 'linear-gradient(97deg, #BB6BD9 0%, #6E26CD 54.67%)': 'white',  color:cardCategory === 'Contraceptives, STIs & Testing' ? 'white' : 'black' }}> Contraceptives, STIs & Testing </button>

                <button onClick={()=>{categoryHandler('Government Policies & Schemes'); artHandler(gov_sch); podHandler(gov_sch_facts) ; VideoHandler(crisis_helplines), categoryHandler('Government Policies & Schemes')}} style={{ background : cardCategory ==='Government Policies & Schemes'  ? 'linear-gradient(97deg, #BB6BD9 0%, #6E26CD 54.67%)': 'white' ,  color:cardCategory === 'Government Policies & Schemes' ? 'white' : 'black'}}>Government Policies & Schemes</button>

                <button onClick={()=>{VideoHandler(Reprod_data_vids);artHandler(Reprod_data_article); podHandler(Reprod_data_pods) ;categoryHandler('Sexual & Reproductive Health') }} style={{background: cardCategory === 'Sexual & Reproductive Health' ? 'linear-gradient(95deg, #BB6BD9 0%, #6E26CD 54.67%)' : 'white',color: cardCategory === 'Sexual & Reproductive Health' ? 'white' : 'black', }}>Sexual & Reproductive Health</button>
               
                <button onClick={()=>{VideoHandler(Lgbt_data_vids); artHandler(Lgbt_data_article); podHandler(Lgbt_data_pods); categoryHandler('LGBTQ+')}}  style={{ background : cardCategory ==='LGBTQ+'  ? 'linear-gradient(97deg, #BB6BD9 0%, #6E26CD 54.67%)': 'white' ,  color:cardCategory === 'LGBTQ+' ? 'white' : 'black'}}>LGBTQ+</button>
             
                <button onClick={()=>{artHandler(mythbust_article); categoryHandler('Myth Buster')}} style={{ background : cardCategory ==='Myth Buster'  ? 'linear-gradient(97deg, #BB6BD9 0%, #6E26CD 54.67%)': 'white' ,  color:cardCategory === 'Myth Buster' ? 'white' : 'black'}}>Myth Buster</button>
           
            </div>
        
            {cardCategory==='Government Policies & Schemes' ? (
                <div className='gov_pol'>
                    <p>Government Schemes</p> 

                    <div className='article'>
                {artCategory &&  (
                    <CardCollection cardData={artCategory} cardinfo={cardCategory}/>
                 )}

                 </div>

                 <p> Insights !</p>

                 <div className='podcast'>
                {podCategory &&  (
                <CardCollection cardData={podCategory} cardinfo={cardCategory} />
                  )}
                </div>

                <p>Crisis Helplines</p> 

                <div className='row-container'>   
                {vidCategory && (
                    <CardCollection cardData={vidCategory} cardinfo={cardCategory}/>
                )}
                </div>

                 </div>
        ) : cardCategory==='Myth Buster' ? (
            <div className='myth'>
                  <p>Embark on a myth-busting journey with us!</p>
                <div className='article'>
            {artCategory &&  (
                <CardCollection cardData={artCategory} cardinfo={cardCategory} />
            )}
                </div>

            </div>

        ) : (   <div>
                <p>Videos</p> 

                <div className='row-container'>   
                {vidCategory && (
                    <CardCollection cardData={vidCategory} cardinfo={cardCategory}/>
                )}
                </div>

               <p>Recommended Articles</p>
                <div className='article'>
            {artCategory &&  (
                <CardCollection cardData={artCategory} cardinfo={cardCategory} />
            )}
                </div>

                <p>Explore Podcasts</p>
                <div className='podcast'>
                {podCategory &&  (
                <CardCollection cardData={podCategory} cardinfo={cardCategory} />
            )}
                </div>
                </div>
            )}
            </div>
    );
};
export default EduHub;