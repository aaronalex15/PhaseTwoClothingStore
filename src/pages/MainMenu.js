import { Container } from "@mui/material";
import { useState } from "react";
import ProductList from "../components/ProductList";
import Search from "../components/Search";
import NewProduct from "../components/NewProduct";

function MainMenu() {
    const [productList, setProductList] = useState([]);

    // Function to add a new product to the product list
    const addProduct = (formData) => {
        // Append the new product to the existing product list
        setProductList([...productList, formData]);
    };

    return (
        <div className="Home">
            <h1 className="main-title">SmoothShop</h1>
            <Container>
                <br />
                <Search />
                <br />
                <ProductList productList={productList} setProductList={setProductList} />
                <br />
                <NewProduct addProduct={addProduct} />
            </Container>
        </div>
    );
}

export default MainMenu;
