import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';



function ProductCard({ products }) {
    const { title, price, description, category, image, sprites: { front, back } } = products;
  
    const handleClick = () => {
      console.log("clicked");
    };
  
    return (
      <Card>
        <div onClick={handleClick}>
          <div className="image">
            <img src={front} alt={title} />
          </div>
          <div className="text">
            <div className="header">{title}</div>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </Card>
    );
  }
  
  export default ProductCard;
