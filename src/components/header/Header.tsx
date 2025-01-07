import './Header.css';
import logoImage from '../../assets/icons/Logo.png';
import cartImage from '../../assets/icons/cart.png';
import { Link } from "react-router-dom";

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
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/menu" className="nav-item">Menu</Link>
                <Link to="/company" className="nav-item">Company</Link>
                <Link to="/login" className="nav-item">Login</Link>
            </nav>

            <div className="cart">
                <Link to="/order">
                    <img src={cartImage} alt="Cart" className="cart-icon" />
                    <span className="cart-count">{cartCount}</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
