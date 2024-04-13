import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import { Search } from "@mui/icons-material";
import ProductForm from "../components/ProductForm";
import { Container } from "@mui/material";
import ProductCard from "../components/ProductCard";


function ProductPage() {
    return (
        <div className="Home">
            <h1>ProductPage</h1>
            <Container>
                <h1> Miké(y) </h1>
                <br />
                <Search />
                <br />
                 <ProductCard /> 
                <br />
                <ProductList />
            </Container>
        </div>
    );
}

export default ProductPage;