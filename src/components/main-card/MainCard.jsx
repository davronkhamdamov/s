import React from 'react';
import { Link } from 'react-router-dom';
import c from './MainCard.module.css';
import { v4 as uuidv4 } from 'uuid';

const MainCard = ({ image, title, linkText, linkURL, cardImages }) => {
  return (
    <div className={c.card}>
      <h2 className={c.cardTitle}>{title}</h2>
      <div className={c.imgs}>
        {cardImages ? (
          cardImages.map((item) => (
            <Link key={uuidv4} className={c.list} to={'/seemore/product'}>
              <img src={item.image} alt="" />
              <p>{item.subtitle}</p>
            </Link>
          ))
        ) : (
          <img src={image} alt="" />
        )}
      </div>
      <Link className={c.linkUrl} to={linkURL}>
        {linkText}
      </Link>
    </div>
  );
};

export default MainCard;
