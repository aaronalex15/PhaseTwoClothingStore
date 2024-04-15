import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button, CircularProgress } from '@mui/material';
import { Link } from "react-router-dom";

function Cart() {
    const { id } = useParams();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            setCartItems(savedCartItems);
        }
    }, []);

    useEffect(() => {
        if (id) {
            setLoading(true);
            fetchItemDetails(id)
                .then((item) => {
                    setCartItems(prevItems => [...prevItems, item]); // Append new item to existing cart items
                    setLoading(false);
                    localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
                })
                .catch((error) => {
                    console.error('Error fetching item details:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    const fetchItemDetails = async (itemId) => {
        const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
        const data = await response.json();
        return data;
    };

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };

    return (
        <Container>
            <h1 className="main-title">LuxeMarket</h1>
            <Link to="/shop">
                <Button variant="contained" color="primary">Main Menu</Button>
            </Link>
            <h1>Items In Cart</h1>
            {loading ? (
                <CircularProgress />
            ) : (
                cartItems.map((item, index) => (
                    <div key={index}>
                        <Typography variant="h4">{item.title}</Typography>
                        <img src={item.image} alt={item.title} style={{ maxWidth: '100px' }} />
                        <Typography variant="h6">Price: ${item.price}</Typography>
                        <Button variant="contained" color="secondary" onClick={() => removeFromCart(index)}>Remove</Button>
                    </div>
                ))
            )}
        </Container>
    );
}

export default Cart;
