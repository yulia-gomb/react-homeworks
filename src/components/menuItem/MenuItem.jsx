import './MenuItem.css';
import PropTypes from "prop-types";


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
                    <button>Add to card</button>
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
