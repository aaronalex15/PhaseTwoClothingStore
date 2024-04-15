import React from 'react';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const AddToCart = ({ id }) => {
    const handleAddToCart = () => {
        console.log('Item added to cart!');
    };

    return (
        <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
            <Button
                onClick={handleAddToCart}
                variant="contained" 
                color="primary" 
                style={{
                    backgroundColor: 'red', 
                    color: 'white', 
                    padding: '10px 20px', 
                    borderRadius: '5px', 
                    fontWeight: 'bold', 
                    fontSize: '14px', 
                    marginTop: '10px', 
                }}
            >
                Add to Cart
            </Button>
        </Link>
    );
};

export default AddToCart;

