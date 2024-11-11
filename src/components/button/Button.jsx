import './Button.css'
import PropTypes from "prop-types";
import { Component } from "react";

class Button extends Component {
    render() {
        const { label, onClick, variant = 'secondary' } = this.props;

        return (
            <button
                className={`button ${variant}`}
                onClick={onClick}
            >
                {label}
            </button>
        );
    }
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button
