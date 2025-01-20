import './MenuItem.css';
import Button from "../button/Button";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

interface MenuItemProps {
    item: {
        id: string;
        meal: string;
        category?: string;
        img: string;
        price: number;
        instructions: string;
    };
    onAddToCart: (itemId: string, quantity: number) => void;
}

const MenuItem = ({ item }: MenuItemProps) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setQuantity(value > 0 ? value : 1);
    };

    const handleAddToCart = () => {
        dispatch(addToCart({
            id: item.id,
            meal: item.meal,
            img: item.img,
            price: item.price,
            quantity
        }));
        setQuantity(1);
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
