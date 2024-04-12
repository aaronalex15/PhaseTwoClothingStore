import React from "react";
import ProductCard from "./ProductCard";
import {Card} from "@mui/material"

function ProductList() {
    return (
        <>
        <h1>Latest Arrivals</h1>
        <Card.Group itemsPerRow={3}>
        <ProductCard />
        </Card.Group>
        </>
    );
}

export default ProductList;