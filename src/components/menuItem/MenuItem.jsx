import './MenuItem.css';
import PropTypes from "prop-types";
import Button from "../button/Button.jsx";
import { Component } from "react";


class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        };
    }

    getTruncatedInstructions = (description) => {
        return description.length > 100 ? description.slice(0, 100) + '...' : description;
    };

    handleQuantityChange = (event) => {
        this.setState({ quantity: event.target.value });
    };

    handleAddToCart = () => {
        console.log(`Added ${this.state.quantity} item(s) to the cart.`);
    };


    render() {
        const { item } = this.props;
        const { quantity } = this.state;
        const truncatedInstructions = this.getTruncatedInstructions(item.instructions);

        return (
            <div className="menu-item">
                <img src={item.img} alt={item.meal} />
                <div className="menu-item-info">
                    <h3>{item.meal}</h3>
                    <span>$ {item.price} USD</span>
                    <p>{truncatedInstructions}</p>
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
        img: PropTypes.string.isRequired,
        meal: PropTypes.string.isRequired,
        instructions: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default MenuItem;
