import logo from "./splashCover.png";
import { Link } from "react-router-dom";
import './splash.css';

function Splash() {
    return (
        <div className="splash-container">
            <header>
                <img src={logo} className="splash-logo" alt="logo" />
                <h1 className="splash-title">SmoothShop</h1>
                <h2 className="elevate-text">Shopping with Ease</h2>
            </header>
            <Link to="/shop">
                <button className="centered-button">SHOP</button>
            </Link>
        </div>
    );
}

export default Splash;
