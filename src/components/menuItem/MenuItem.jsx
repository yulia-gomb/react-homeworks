import './MenuItem.css';
import PropTypes from "prop-types";
import Button from "../button/Button.jsx";
import { Component } from "react";

class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
    }

    handleQuantityChange = (event) => {
        this.setState({ quantity: parseInt(event.target.value, 10) });
    };

    handleAddToCart = () => {
        const { item, onAddToCart } = this.props;
        const { quantity } = this.state;
        onAddToCart(item.id, quantity);
    };

    render() {
        const { item } = this.props;
        const { quantity } = this.state;
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
                            onChange={this.handleQuantityChange}
                            min={1}
                        />
                        <Button
                            label="Add to cart"
                            onClick={this.handleAddToCart}
                            variant="primary"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

MenuItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        meal: PropTypes.string.isRequired,
        instructions: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
};

export default MenuItem;
