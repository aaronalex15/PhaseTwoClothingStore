import React from "react";
import logo from "../components/splashCover.png";
import { Link } from "react-router-dom";
import '../components/splash.css'; 

function Splash() {
    return (
        <div className="splash-container">
            <header>
                <img src={logo} className="splash-logo" alt="logo" />
                <h1 className="splash-title">LuxeMarket</h1>
                <h2 className="elevate-text">Elevate Your Shopping Experience</h2>
            </header>
            <Link to="/shop">
                <button className="centered-button">SHOP</button>
            </Link>
        </div>
    );
}

export default Splash;
