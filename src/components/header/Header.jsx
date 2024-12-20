import './Header.css';
import logoImage from '../../assets/icons/Logo.png';
import cartImage from '../../assets/icons/cart.png';
import PropTypes from "prop-types";

const Header = ({ cartCount }) => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logoImage} alt="Logo" className="logo-image" />
            </div>

            <nav className="nav">
                <a href="#home" className="nav-item">Home</a>
                <a href="#menu" className="nav-item active-item">Menu</a>
                <a href="#company" className="nav-item">Company</a>
                <a href="#login" className="nav-item">Login</a>
            </nav>

            <div className="cart">
                <img src={cartImage} alt="Cart" className="cart-icon" />
                <span className="cart-count">{cartCount}</span>
            </div>
        </header>
    );
};

Header.propTypes = {
    cartCount: PropTypes.number.isRequired,
};

export default Header;
