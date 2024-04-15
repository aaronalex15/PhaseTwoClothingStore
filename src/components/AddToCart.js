import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const AddToCart = ({ id }) => {
    const handleAddToCart = () => {
        console.log('Item added to cart!');
    };

    return (
        <Link to={`/product/${id}`} style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    onClick={handleAddToCart}
                    variant="contained"
                    color="primary"
                    style={{
                        backgroundColor: 'red', // Customize the background color as desired
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        fontWeight: 'bold',
                        fontSize: '14px',
                    }}
                >
                    Add to Cart
                </Button>
            </div>
        </Link>
    );
};

export default AddToCart;
