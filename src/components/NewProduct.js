import React, { useState } from 'react';
import {
    TextField,
    Button,
    Container,
    Box,
    FormControl,
} from '@mui/material';

function NewProduct({ addProduct }) {
    // Initial state for the new product
    const initialState = {
        title: '',
        category: '',
        price: '',
        description: '',
        image: '',
    };

    // State variables for managing the new product
    const [newProduct, setNewProduct] = useState(initialState);
    const [formVisible, setFormVisible] = useState(false);

    // Handle input changes for the form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: newProduct.title,
                image: newProduct.image,
                category: newProduct.category,
                price: newProduct.price,
                description: newProduct.description
            }),
        })
        .then((response) => response.json())
        .then((products) => {
            addProduct(products);
        });

        // Reset the form after submission
        setNewProduct(initialState);
        setFormVisible(false);
    };

    // Function to toggle form visibility
    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };

    return (
        <Container>
            {/* Button to toggle form visibility */}
            <Button variant="contained" color="primary" onClick={toggleFormVisibility}>
                {formVisible ? 'Hide Form' : 'Show Form'}
            </Button>

            {/* Conditionally render the form */}
            {formVisible && (
                <Box component="form" onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                    <TextField
                        fullWidth
                        label="Title"
                        name="title"
                        value={newProduct.title}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Category"
                        name="category"
                        value={newProduct.category}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Price"
                        name="price"
                        type="number"
                        value={newProduct.price}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        name="description"
                        value={newProduct.description}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Image URL"
                        name="image"
                        value={newProduct.image}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            )}
        </Container>
    );
}

export default NewProduct;
