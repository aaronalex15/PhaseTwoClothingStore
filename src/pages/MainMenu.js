import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
//import { Search } from "@mui/icons-material";
import ProductForm from "../components/ProductForm";
import { Container } from "@mui/material";
import Search from "../components/Search";

function MainMenu() {
    return (
        <div className="Home">
           <h1 className="main-title">LuxeMarket</h1>
            <Container>
                
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

export default MainMenu;