import './OrderConfirmationPage.css';
import { useLocation } from "react-router-dom";
import { useTheme } from "../../utils/themeContext";


const OrderConfirmationPage = () => {
    const location = useLocation();
    const { orderId, deliveryAddress } = location.state || {};
    const { theme } = useTheme();
    const confirmationClass = theme === 'dark' ? 'confirmation dark-theme' : 'confirmation';

    return (
        <div className={confirmationClass}>
            <h1>Order Confirmed!</h1>
            <p>Your order <span>#{orderId}</span> is successfully placed!</p>
            <p>And will be delivered to:</p>
            <span>{deliveryAddress}</span>
            <p>as soon as possible.</p>
            <p>Thank you!</p>
        </div>
    );
};

export default OrderConfirmationPage;
