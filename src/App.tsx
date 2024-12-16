import './App.css';
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { useState } from "react";
import HomePage from "./pages/homePage/HomePage.jsx";
import MenuPage from "./pages/menuPage/MenuPage.jsx";
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from "./pages/notFoundPage/NotFoundPage.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";


interface CartItems {
    [key: string]: number;
}

const App = () => {
    const [cartItems, setCartItems] = useState<CartItems>({});

    const handleAddToCart = (itemId: string, quantity: number): void => {
        setCartItems(prevCartItems => ({
            ...prevCartItems,
            [itemId]: (prevCartItems[itemId] || 0) + quantity,
        }));
    };

    const getCartCount = (): number => {
        return Object.values(cartItems).reduce((total, count) => total + count, 0);
    };

    const cartCount: number = getCartCount();

    return (
        <>
            <Header cartCount={cartCount} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage onAddToCart={handleAddToCart} />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;