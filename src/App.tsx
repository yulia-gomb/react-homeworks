import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import MenuPage from "./pages/menuPage/MenuPage";
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { selectCartCount } from "./store/cartSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import OrderPage from "./pages/orderPage/OrderPage";


const App = () => {
    const dispatch = useAppDispatch();

    const cartCount = useAppSelector(selectCartCount);


    return (
        <>
            <Header cartCount={cartCount} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/menu" element={<MenuPage/>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
