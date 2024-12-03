import './App.css';
import Header from "./components/header/Header.jsx";
import Content from "./components/content/Content.jsx";
import Footer from "./components/footer/Footer.jsx";
import { useState } from "react";


const App = () => {
    const [cartItems, setCartItems] = useState({});

    const handleAddToCart = (itemId, quantity) => {
        setCartItems(prevCartItems => ({
            ...prevCartItems,
            [itemId]: (prevCartItems[itemId] || 0) + quantity,
        }));
    };

    const getCartCount = () => {
        return Object.values(cartItems).reduce((total, count) => total + count, 0);
    };

    const cartCount = getCartCount();

    return (
        <div>
            <Header cartCount={cartCount} />
            <Content onAddToCart={handleAddToCart} />
            <Footer />
        </div>
    );
};

export default App;
