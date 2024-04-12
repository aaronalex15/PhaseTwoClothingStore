import React from "react";
import ProductList from "./ProductList";
import { Search } from "@mui/icons-material";
import ProductForm from "./ProductForm";
import { Container } from "@mui/material";

function ProductPage() {
    return (
    <Container>
        <h1> �� Miké(y) �� </h1>
        <br />
        <Search />
        <br />
        <ProductForm />
        <br />
        < ProductList />
    </Container>
    
    );
};

export default ProductPage;