import './Content.css';
import PropTypes from 'prop-types';
import MenuPage from "../../pages/menuPage/MenuPage.jsx";
import { Component } from "react";

class Content extends Component {
    render() {
        const { onAddToCart } = this.props;

        return (
            <div className="content">
                <MenuPage onAddToCart={onAddToCart} />
            </div>
        );
    }
}

Content.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
};

export default Content;
