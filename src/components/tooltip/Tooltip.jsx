import './Tooltip.css';
import PropTypes from "prop-types";


const Tooltip = ({ text, tooltipText }) => {
    return (
        <span className="tooltip">
            {text}
            <span className="tooltip-text">{tooltipText}</span>
        </span>
    );
};

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
    tooltipText: PropTypes.string.isRequired,
};

export default Tooltip;
