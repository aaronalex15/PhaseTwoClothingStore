import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import AddToCart from './AddToCart';

function ProductList() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
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
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4} key={product.id}>
                        <Card style={{ backgroundColor: '#FFDAB9' }}>
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
                                    {product.category}
                                </Typography>
                                <AddToCart id={product.id} />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ProductList;
