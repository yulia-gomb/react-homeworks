import './OrderPage.css';
import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import {
    removeFromCart,
    updateQuantity,
    clearCart,
    selectFormData,
    selectErrors,
    setFormData, setErrors
} from "../../store/cartSlice";
import Button from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { MENU_PATH, ORDER_CONFIRMATION_PATH } from "../../contstants/constants";
import { Errors } from '../../store/cartSlice';
import { useTheme } from "../../utils/themeContext";


const OrderPage = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const formData = useSelector(selectFormData);
    const errors = useSelector(selectErrors);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { theme } = useTheme();
    const isDarkTheme = theme === 'dark';
    console.log(isDarkTheme);

    const handleQuantityChange = (id: string, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleRemoveItem = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(setFormData({ ...formData, [name]: value }));
        dispatch(setErrors({ ...errors, [name]: '' }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let formIsValid = true;
        const newErrors: Errors = { street: '', house: '' };

        if (!formData.street.trim()) {
            newErrors.street = 'Street is required';
            formIsValid = false;
        }

        if (!formData.house.trim()) {
            newErrors.house = 'House number is required';
            formIsValid = false;
        }

        dispatch(setErrors(newErrors));

        if (formIsValid) {
            const orderId = Math.floor(100000 + Math.random() * 900000);
            dispatch(clearCart());
            navigate(ORDER_CONFIRMATION_PATH, {
                state: {
                    orderId,
                    deliveryAddress: `${formData.street}, ${formData.house}`,
                },
            });
        }
    };

    const handlePlaceAnOrderClick = (): void => {
        navigate(MENU_PATH);
    };

    return (
        <div className={`order ${isDarkTheme ? 'dark' : ''}`}>
            {cartItems.length === 0 ? (
                <div>
                    <h1>Your cart is empty</h1>
                    <Button label="Place an Order" onClick={handlePlaceAnOrderClick} variant="primary" />
                </div>
            ) : (
                <>
                    <h1>Finish your order</h1>
                    <div className="order-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className={`order-item ${isDarkTheme ? 'dark' : ''}`}>
                                <img src={item.img} alt={item.meal} className="order-item-image" />
                                <div className="order-item-details">
                                    <h3>{item.meal}</h3>
                                    <span className="order-item-price">$ {item.price.toFixed(2)} USD</span>
                                </div>
                                <div className="order-item-actions">
                                    <input
                                        type="number"
                                        min={1}
                                        value={item.quantity}
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                                        className="order-item-quantity"
                                    />
                                    <button
                                        onClick={() => handleRemoveItem(item.id)}
                                        className="order-item-remove"
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="order-total">
                        <h2>Total:</h2>
                        <span className="order-total-amount">$ {totalAmount.toFixed(2)} USD</span>
                    </div>

                    <form className="order-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="street"
                                placeholder="Street"
                                value={formData.street}
                                onChange={handleInputChange}
                            />
                            <div className="order-error-container">
                                {errors.street && (
                                    <span className={`order-error-message ${errors.street ? "visible" : ""}`}>
                                        {errors.street}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="house"
                                placeholder="House"
                                value={formData.house}
                                onChange={handleInputChange}
                            />
                            <div className="order-error-container">
                                {errors.house && (
                                    <span className={`order-error-message ${errors.house ? "visible" : ""}`}>
                                        {errors.house}
                                    </span>
                                )}
                            </div>
                        </div>
                        <Button label="Order" variant="primary" />
                    </form>
                </>
            )}
        </div>
    );
};

export default OrderPage;
