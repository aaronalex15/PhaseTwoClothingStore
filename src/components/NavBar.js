import { NavLink } from "react-router-dom";
testing 
function NavBar() {
    return (
    <nav className="navbar">
    <NavLink to="/">Splash</NavLink>
    <NavLink to="/shop">MainMenu</NavLink>
    <NavLink to="/product/:id">Cart</NavLink>
    </nav>
    );
}

export default NavBar;