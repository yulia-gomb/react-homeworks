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

    handleQuantityChange = (event) => {
        this.setState({ quantity: event.target.value });
    };

    handleAddToCart = () => {
        console.log('Add to cart clicked');
    };

    render() {
        const { item } = this.props;
        const { quantity } = this.state;

        return (
            <div className="menu-item">
                <img src={item.image} alt={item.name} />
                <div className="menu-item-info">
                    <h3>{item.name}</h3>
                    <span>$ {item.price} USD</span>
                    <p>{item.description}</p>
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
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default MenuItem;
