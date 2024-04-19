import React, { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

function NewProduct({ addProduct }) {
    // Initial state for the new product
    const initialState = {
        title: '',
        category: '',
        price: '',
        description: '',
        imageFile: null, // Updated state to hold the image file
    };

    // State variables for managing the new product
    const [newProduct, setNewProduct] = useState(initialState);
    const [formVisible, setFormVisible] = useState(false);

    // Handle input changes for the form fields
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        
        if (name === 'imageFile') {
            setNewProduct({ ...newProduct, [name]: files[0] });
        } else {
            setNewProduct({ ...newProduct, [name]: value });
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', newProduct.title);
        formData.append('category', newProduct.category);
        formData.append('price', newProduct.price);
        formData.append('description', newProduct.description);
        formData.append('image', newProduct.imageFile); // Append the image file

        fetch("https://fakestoreapi.com/products", {
            method: "POST",
            body: formData,
        })
        .then(response => response.json())
        .then(products => {
            addProduct(products);
            console.log("POST request was successful:", products);
        })
        .catch(error => {
            console.error("There was an error with the POST request:", error);
        });

        // Reset the form after submission
        setNewProduct(initialState);
        setFormVisible(false);
    };

    // Function to toggle form visibility
    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };

    // Error message for title length
    const titleError = newProduct.title.length < 3 ? (
        <p style={{ color: 'red' }}>Title must have at least 3 characters!</p>
    ) : '';

    return (
        <Container>
            {/* Button to toggle form visibility */}
            <Button variant="contained" color="primary" onClick={toggleFormVisibility}>
                {formVisible ? 'Hide Form' : 'Add Product'}
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
                    {titleError}
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
                    {/* Updated file input for the image */}
                    <TextField
                        fullWidth
                        type="file"
                        label="Image"
                        name="imageFile"
                        onChange={handleChange}
                        margin="normal"
                        InputLabelProps={{ shrink: true }}
                    />
                    {/* Image preview based on the uploaded file */}
                    {newProduct.imageFile && (
                        <Box mt={2}>
                            <img src={URL.createObjectURL(newProduct.imageFile)} alt="Product" style={{ width: '100px', height: 'auto' }} />
                        </Box>
                    )}
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Box>
            )}
        </Container>
    );
}

export default NewProduct;
