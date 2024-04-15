import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import '../components/Style.css'; 
import CartPage from '../components/CartPage';

function Cart() {
    return (
        <div className="Cart">

            <Container>
            
                <br />
                <CartPage />
                <br />
            
            </Container>
        </div>
    );
}

export default Cart;
