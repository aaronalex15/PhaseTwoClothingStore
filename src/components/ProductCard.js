import React from 'react';
import {Card} from "@mui/material"

function ProductCard() {
const products = {
    id: 1,
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.',
    category: "men's clothing",
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
};

  // Destructure product details
const { title, price, description, category, image } = products;

return (
    <Card>
    <div className="product-card">
        <img src={image} alt={title} className="product-image" />
        <div className="product-info">
        <h3 className="product-title">{title}</h3>
          <p className="product-price">${price}</p>
          <p className="product-description">{description}</p>
          <p className="product-category">{category}</p>
          <p className="product-rating">Rating: {products.rating.rate} ({products.rating.count} reviews)</p>
        </div>
      </div>
    </Card>
  );
}

export default ProductCard;
