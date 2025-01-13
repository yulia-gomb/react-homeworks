import './Header.css';
import logoImage from '../../assets/icons/Logo.png';
import cartImage from '../../assets/icons/cart.png';
import { NavLink } from "react-router-dom";

type HeaderProps = {
    cartCount: number;
};

const Header = ({ cartCount }: HeaderProps) => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logoImage} alt="Logo" className="logo-image" />
            </div>

            <nav className="nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/menu"
                    className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}
                >
                    Menu
                </NavLink>
                <NavLink
                    to="/company"
                    className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}
                >
                    Company
                </NavLink>
                <NavLink
                    to="/login"
                    className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}
                >
                    Login
                </NavLink>
            </nav>

            <div className="cart">
                <NavLink to="/order">
                    <img src={cartImage} alt="Cart" className="cart-icon" />
                    <span className="cart-count">{cartCount}</span>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
