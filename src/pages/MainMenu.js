import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import { Container } from "@mui/material";
import Search from "../components/Search";


function MainMenu() {
    return (
        <div className="Home">
            <h1>Main-MENU</h1>
            <Container>
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

export default MainMenu;