import './MenuItem.css';
import PropTypes from "prop-types";
import Button from "../button/Button.jsx";


const MenuItem = ({ item }) => {
    return (
        <div className="menu-item">
            <img src={item.image} alt={item.name} />
            <div className="menu-item-info">
                <h3>{item.name}</h3>
                <span>$ {item.price} USD</span>
                <p>{item.description}</p>
                <div className="menu-item-actions">
                    <input type="number" defaultValue={1} min={1}/>
                    <Button
                        label="Add to card"
                        onClick={() => console.log('Add to card clicked')}
                        variant="primary"
                    />
                </div>
            </div>
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default MenuItem;
