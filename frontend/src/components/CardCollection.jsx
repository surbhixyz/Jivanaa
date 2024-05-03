import React from "react";
import Card from "./Card";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CardCollection.css"; 

function CardCollection({ cardData , cardinfo}) {
  const cardWidth = 300; 
  const containerWidth = window.innerWidth;
  console.log(cardinfo);
  const itemsToShow = Math.floor(containerWidth / cardWidth);
  const chunkedData = [];
  for (let i = 0; i < cardData.length; i += itemsToShow) {
    chunkedData.push(cardData.slice(i, i + itemsToShow));
  } 
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
