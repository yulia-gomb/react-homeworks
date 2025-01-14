import './OrderConfirmationPage.css';
import { useLocation } from "react-router-dom";


const OrderConfirmationPage = () => {
    const location = useLocation();
    const { orderId, deliveryAddress } = location.state || {};

    return (
        <div className="confirmation-page">
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
