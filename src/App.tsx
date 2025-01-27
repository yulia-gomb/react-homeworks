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
import {
    HOME_PATH,
    LOGIN_PATH,
    MENU_PATH,
    NOT_FOUND_PATH,
    ORDER_CONFIRMATION_PATH,
    ORDER_PATH
} from "./contstants/constants";
import { ThemeProvider } from "./utils/themeContext";


const App = () => {
    const cartCount = useAppSelector(selectCartCount);

    return (
        <ThemeProvider>
            <div className="app-container">
                <Header cartCount={cartCount} />
                <main className="main-content">
                    <Routes>
                        <Route path={HOME_PATH} element={<HomePage />} />
                        <Route path={MENU_PATH} element={<MenuPage />} />
                        <Route path={LOGIN_PATH} element={<LoginPage />} />
                        <Route element={<ProtectedRoute />}>
                            <Route path={ORDER_PATH} element={<OrderPage />} />
                        </Route>
                        <Route path={ORDER_CONFIRMATION_PATH} element={<OrderConfirmationPage />} />
                        <Route path={NOT_FOUND_PATH} element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default App;
