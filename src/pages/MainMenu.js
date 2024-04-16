import { Link } from 'react-router-dom';
import { Container } from "@mui/material";
import ProductList from "../components/ProductList";
import Search from "../components/Search";


function MainMenu() {
    return (
        <div className="Home">
        <h1 className="main-title">SmoothShop</h1>
            <Container>
            <br />
                <Search />
                <br />
              
                <br />
                <ProductList />

            </Container>
        </div>
    );
}

export default MainMenu;