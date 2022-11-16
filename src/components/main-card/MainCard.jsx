import React from 'react';
import { Link } from 'react-router-dom';
import c from "./MainCard.module.css";

const MainCard = ({ image, title, linkText, linkURL, cardImages }) => {
  return (
    <div className={c.card}>
      <h2>{title}</h2>
      {
        cardImages ? cardImages.map(item => 
          <div>
            <img src={item.image} alt="" />
          </div>  
        ) : <img  src={image}/>
      }
      <Link to={linkURL}>{linkText}</Link>
    </div>
  )
}

export default MainCard