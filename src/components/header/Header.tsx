import './Header.css';
import logoImage from '../../assets/icons/Logo.png';
import cartImage from '../../assets/icons/cart.png';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type HeaderProps = {
    cartCount: number;
};

const Header = ({ cartCount }: HeaderProps) => {
    const { isLoggedIn, username } = useSelector((state: RootState) => state.login);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login", { state: { from: { pathname: "/menu" } } });
    };

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
                {isLoggedIn ? (
                    <span className="nav-item username">Welcome, {username}!</span>
                ) : (
                    <span className="nav-item" onClick={handleLoginClick}>
                        Login
                    </span>
                )}

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
