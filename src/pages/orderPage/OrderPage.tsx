import './OrderPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFromCart, updateQuantity } from "../../store/cartSlice";
import Button from "../../components/button/Button";


const OrderPage = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleQuantityChange = (id: string, quantity: number) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    const handleRemoveItem = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const handleSubmitOrder = () => {
        console.log("Order submitted");
    };

    return (
        <div className="order-page">
            <h1>Finish your order</h1>

            <div className="order-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="order-item">
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

            <form
                className="order-form"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitOrder();
                }}
            >
                <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" name="street" required />
                </div>
                <div className="form-group">
                    <label htmlFor="house">House</label>
                    <input type="text" id="house" name="house" required />
                </div>
                <Button label="Order" variant="primary" />
            </form>
        </div>
    );
};

export default OrderPage;
