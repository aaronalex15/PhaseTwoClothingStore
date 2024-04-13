import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';

function ProductList() {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((r) => r.json())
            .then((data) => {
                setProductList(data);
            });
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" style={{ marginBottom: '20px' }}>
                Latest Arrivals
            </Typography>
            <Grid container spacing={3}>
                {productList.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="200"
                                image={product.image}
                                alt={product.title}
                                style={{ objectFit: 'contain' }}
                            />
                            <CardContent>
                                <Typography variant="h6">{product.title}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ${product.price}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {product.description}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {product.category}
                                </Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ProductList;
