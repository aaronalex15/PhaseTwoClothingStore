import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, CircularProgress, Box } from '@mui/material';

function CartPage() {
    const { id } = useParams();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch saved cart items from local storage when component mounts
    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        if (savedCartItems) {
            setCartItems(savedCartItems);
        }
    }, []);

    // Fetch item details when id changes
    useEffect(() => {
        if (id) {
            setLoading(true);
            fetchItemDetails(id)
                .then((item) => {
                    setCartItems(prevItems => [...prevItems, item]);
                    setLoading(false);
                    localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]));
                })
                .catch((error) => {
                    console.error('Error fetching item details:', error);
                    setLoading(false);
                });
        }
    }, [id]);

    // Function to fetch item details based on item ID
    const fetchItemDetails = async (itemId) => {
        const response = await fetch(`https://fakestoreapi.com/products/${itemId}`);
        const data = await response.json();
        return data;
    };

    // Function to remove an item from the cart
    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    };

    // Component to display individual cart item
    const CartItem = ({ item, index }) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: 'contain', padding: 1 }}
                />
                <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
                        Price: ${item.price.toFixed(2)}
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => removeFromCart(index)}
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '14px',
                                color: 'white',
                                background: 'red',
                            }}
                        >
                            Remove
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    );

    // Function to calculate the total price of all cart items
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <Container sx={{ paddingTop: 4 }}>
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Items in Cart
            </Typography>
            {loading ? (
                <Box display="flex" justifyContent="center" alignItems="center">
                    <CircularProgress />
                </Box>
            ) : (
                <Grid container spacing={2}>
                    {cartItems.map((item, index) => (
                        <CartItem key={index} item={item} index={index} />
                    ))}
                </Grid>
            )}
            {/* Display the total price in a container below the items */}
            <Box sx={{ marginTop: 4, padding: 2, border: '1px solid lightgray', borderRadius: 4 }}>
                <Typography variant="h6">Total Price: ${calculateTotalPrice()}</Typography>
            </Box>
        </Container>
    );
}

export default CartPage;

