import React, { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

function NewProduct() {
    // State to manage the form data
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        price: '',
    });

    // State to manage the form visibility
    const [formVisible, setFormVisible] = useState(false);

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Construct the payload with the form data
        const payload = {
            title: formData.title,
            category: formData.category,
            price: formData.price,
        };

        try {
            // Make a POST request to the specified URL
            const response = await fetch('https://fakestoreapi.com/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            // Check if the response is successful
            if (response.ok) {
                const result = await response.json();
                console.log('Item added successfully:', result);

                // Reset the form data and hide the form after successful submission
                setFormData({
                    title: '',
                    category: '',
                    price: '',
                });

                // Hide the form
                setFormVisible(false);
            } else {
                console.error('Failed to add item:', response.statusText);
            }
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    // Function to toggle form visibility
    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
    };

    return (
        <Container>
            {/* Button to toggle form visibility */}
            <Button
                variant="contained"
                color="primary"
                onClick={toggleFormVisibility}
                style={{ marginBottom: '16px' }}
            >
                Add a similar Product!
            </Button>

            {/* Form displayed conditionally in its own container based on formVisible state */}
            {formVisible && (
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    style={{ marginBottom: '16px', padding: '16px', border: '1px solid #ccc', borderRadius: '4px' }}
                >
                    <TextField
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        placeholder="Enter product title"
                    />
                    <TextField
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        placeholder="Enter product category"
                    />
                    <TextField
                        label="Price"
                        name="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                        placeholder="Enter product price"
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Add Product
                    </Button>
                </Box>
            )}
        </Container>
    );
}

export default NewProduct;