import './Button.css'
import PropTypes from "prop-types";


const Button = ({ label, onClick, variant = "secondary" }) => {
    return (
        <button className={`button ${variant}`} onClick={onClick}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button
