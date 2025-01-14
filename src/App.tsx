import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homePage/HomePage";
import MenuPage from "./pages/menuPage/MenuPage";
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { selectCartCount } from "./store/cartSlice";
import { useAppSelector } from "./store/hooks";
import OrderPage from "./pages/orderPage/OrderPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import OrderConfirmationPage from "./pages/orderConfirmationPage/OrderConfirmationPage";


const App = () => {
    const cartCount = useAppSelector(selectCartCount);

    return (
        <div className="app-container">
            <Header cartCount={cartCount} />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/order" element={<OrderPage />} />
                    </Route>
                    <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
