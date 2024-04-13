import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
//import { Search } from "@mui/icons-material";
import ProductForm from "../components/ProductForm";
import { Container } from "@mui/material";
import Search from "../components/Search";

function ProductPage() {
    return (
        <div className="Home">
            <h1>Main-MENU</h1>
            <Container>

                <h1> ROE </h1>

                <h1></h1>

                <br />
                <Search />
                <br />
                {/* <ProductForm /> */}
                <br />
                <ProductList />
            </Container>
        </div>


    );
}

export default ProductPage;