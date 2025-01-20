import './Header.css';
import logoImage from '../../assets/icons/Logo.png';
import cartImage from '../../assets/icons/cart.png';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { COMPANY_PATH, HOME_PATH, LOGIN_PATH, MENU_PATH, ORDER_PATH } from "../../contstants/constants";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../utils/themeContext";

type HeaderProps = {
    cartCount: number;
};

const Header = ({ cartCount }: HeaderProps) => {
    const { isLoggedIn, username } = useSelector((state: RootState) => state.login);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate(LOGIN_PATH, { state: { from: { pathname: MENU_PATH } } });
    };

    const { theme, toggleTheme } = useTheme();


    return (
        <header className="header">
            <div className="logo">
                <img src={logoImage} alt="Logo" className="logo-image" />
            </div>

            <nav className="nav">
                <NavLink
                    to={HOME_PATH}
                    className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}
                >
                    Home
                </NavLink>
                <NavLink
                    to={MENU_PATH}
                    className={({ isActive }) => isActive ? "nav-item active-item" : "nav-item"}
                >
                    Menu
                </NavLink>
                <NavLink
                    to={COMPANY_PATH}
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
                <button className="theme-toggle-btn" onClick={toggleTheme}>
                    {theme === 'dark' ? <FaSun /> : <FaMoon />}
                </button>
            </nav>

            <div className="cart">
                <NavLink to={ORDER_PATH}>
                    <img src={cartImage} alt="Cart" className="cart-icon" />
                    <span className="cart-count">{cartCount}</span>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
