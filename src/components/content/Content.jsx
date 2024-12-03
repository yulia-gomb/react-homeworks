import './Content.css';
import PropTypes from 'prop-types';
import MenuPage from "../../pages/menuPage/MenuPage.jsx";


const Content = ({ onAddToCart }) => {
    return (
        <div className="content">
            <MenuPage onAddToCart={onAddToCart} />
        </div>
    );
};

Content.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
};

export default Content;
