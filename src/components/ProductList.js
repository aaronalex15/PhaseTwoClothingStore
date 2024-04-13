import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function ProductList() {

    const [productList, setProductList] = useState([])


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((r) => r.json())
        .then((data) => {
            setProductList(data);
        })
    }, [])

    return (
        <div>
            <h1>Latest Arrivals</h1>
            {productList.map((product) => (
                <Card key={product.id} style={{ marginBottom: '20px' }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt={product.title}
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
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default ProductList;
