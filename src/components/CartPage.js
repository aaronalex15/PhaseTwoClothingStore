import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // allows access to the parameters of the current route.
import { Container, Typography, Button, CircularProgress } from '@mui/material';
import { Link } from "react-router-dom";
import '../components/Style.css'; 

function CartPage() {
    const { id } = useParams(); // to extract the id parameter from url path
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            setCartItems(savedCartItems); // gets items from local storage , if existing and sets them to state
        }
    }, []);

    useEffect(() => {
        if (id) {
            setLoading(true); //if id parameter changes 
            fetchItemDetails(id) //fetchs details to that certain id 
                .then((item) => {
                    setCartItems(prevItems => [...prevItems, item]); // Append new item to existing cart items
                    setLoading(false);
                    localStorage.setItem('cartItems', JSON.stringify([...cartItems, item])); //updates storage of items
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
        newCartItems.splice(index, 1); //removes an item from cart based on index
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };

    return (
        <Container>

            <h1>Items In Cart</h1>
            {loading ? (
                <CircularProgress />
            ) : (
                cartItems.map((item, index) => ( //maps through the cartItems array and renders each item's details such as title, image, price, and a remove button.
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

export default CartPage;
