import React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const AddToCart = ({id}) => {
    const handleAddToCart = () => {
        console.log('Item added to cart!');
    };

    return (
       <Link to ={`/product/${id}`} >
        <Button>
            Add to Cart
        </Button>
        </Link>
    );
};
export default AddToCart;
