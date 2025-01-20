import './MenuItem.css';
import Button from "../button/Button";
import { ChangeEvent, useState } from "react";

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


const MenuItem = ({ item, onAddToCart }: MenuItemProps) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(event.target.value, 10));
    };

    const handleAddToCart = () => {
        onAddToCart(item.id, quantity);
    };

    const instructions = item.instructions.length > 100 ? `${item.instructions.slice(0, 100)}...` : item.instructions;

    return (
        <div className="menu-item">
            <img src={item.img} alt={item.meal} />
            <div className="menu-item-info">
                <h3>{item.meal}</h3>
                <span>$ {item.price} USD</span>
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
