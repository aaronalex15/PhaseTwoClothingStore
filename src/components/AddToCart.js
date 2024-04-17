import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

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
                sx={{
                    fontWeight: 'bold',
                    fontSize: '14px',
                    // Use MUI's default styles for padding and border-radius
                }}
            >
                Add to Cart
            </Button>
        </Link>
    );
};

export default AddToCart;
