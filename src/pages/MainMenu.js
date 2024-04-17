import { Link } from "react-router-dom";
import { Container, Button } from "@mui/material";
import ProductList from "../components/ProductList";
import Search from "../components/Search";


function MainMenu() {
    return (
        <div className="Home">
        <h1 className="main-title-menu">SmoothShop</h1>
            
            <Link to="/product/:id">
                <Button >Checkout</Button>
            </Link>
            
            <Link to="/">
                <Button >SmoothShop</Button>
            </Link>
            
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