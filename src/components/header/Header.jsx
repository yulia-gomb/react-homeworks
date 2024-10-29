import './Header.css';
import logoImage from '../../assets/icons/Logo.png';
import cartImage from '../../assets/icons/cart.png';

function Header() {

    return (
        <header className="header">

            <div className="logo">
                <img src={logoImage} alt="Logo" className="logo-image"/>
            </div>


            <nav className="menu">
                <a href="#home" className="menu-item">Home</a>
                <a href="#menu" className="menu-item active-item">Menu</a>
                <a href="#company" className="menu-item">Company</a>
                <a href="#login" className="menu-item">Login</a>
            </nav>


            <div className="cart">
                <img src={cartImage} alt="Cart" className="cart-icon"/>
                <span className="cart-count">3</span>
            </div>
        </header>
    )
}

export default Header