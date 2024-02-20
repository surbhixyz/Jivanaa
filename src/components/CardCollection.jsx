// import Card from "./Card";
// import "./CardCollection.css"
// import "bootstrap/dist/css/bootstrap.min.css";

// function CardCollection({ cardData }) {
    
//     return (
//         <div className="cardContainer">
//       {cardData.map((single_comp) => (
//         <Card key={single_comp.id} {...single_comp} />
//       ))}
//        </div>
//     );
// }
// export default CardCollection;

import React from "react";
import Card from "./Card";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CardCollection.css"; // Add a CSS file for custom styles

function CardCollection({ cardData , cardinfo}) {
  const cardWidth = 300; 
  const containerWidth = window.innerWidth;
  console.log(cardinfo);
  const itemsToShow = Math.floor(containerWidth / cardWidth);
  const chunkedData = [];
  for (let i = 0; i < cardData.length; i += itemsToShow) {
    chunkedData.push(cardData.slice(i, i + itemsToShow));
  } 
  //makes 3 array of objects each containing 4 objs as items to show=4 , so 12/4=3
  
  // chunk here denotes an subarray of chunkdata and is another array of objects , now this is fed as individual items to carousel .i.e 4 objs at a time 
  // index : subarray index 
  // now this chunk is mapped and each of its objects is passed individually to card
  return (
    <Carousel  wrap={true} className="custom-carousel">
      {chunkedData.map((chunk, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex flex-wrap column justify-content-start">
            {chunk.map((single_comp) => (
              <Card key={single_comp.id} {...single_comp} cardinfo={cardinfo}/>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CardCollection;
