import './MenuItem.css';
import Button from "../button/Button";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity, selectQuantityForItem } from "../../store/cartSlice";
import { RootState } from "../../store/store";

interface MenuItemProps {
    item: {
        id: string;
        meal: string;
        category?: string;
        img: string;
        price: number;
        instructions: string;
    };
}

const MenuItem = ({ item }: MenuItemProps) => {
    const dispatch = useDispatch();
    const quantity = useSelector((state: RootState) => selectQuantityForItem(state, item.id)) || 1;

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value, 10);
        dispatch(updateQuantity({ id: item.id, quantity: newQuantity > 0 ? newQuantity : 1 }));
    };

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: item.id,
            meal: item.meal,
            img: item.img,
            price: item.price,
            quantity
        }));
    };

    const instructions = item.instructions.length > 100
        ? `${item.instructions.slice(0, 100)}...`
        : item.instructions;

    return (
        <div className="menu-item">
            <img src={item.img} alt={item.meal} />
            <div className="menu-item-info">
                <h3>{item.meal}</h3>
                <span>$ {item.price.toFixed(2)} USD</span>
                <p>{instructions}</p>
                <div className="menu-item-actions">
                    <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min={1}
                    />
                    <Button
                        label="Add to cart"
                        onClick={handleAddToCart}
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    );
};

export default MenuItem;