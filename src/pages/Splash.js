import React from "react";
import { Link } from "react-router-dom";


function Splash() {
    return (
        <>
            <header>
                <h1 >Shop-EASE</h1>
            </header>
            <Link to="/SHOP">
                <button>SHOP</button>
            </Link>
        </>
    )
}

export default Splash;