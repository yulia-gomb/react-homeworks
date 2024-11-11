import './Tooltip.css';

const Tooltip = ({ text, tooltipText }) => {
    return (
        <span className="tooltip">
            {text}
            <span className="tooltip-text">{tooltipText}</span>
        </span>
    );
};

export default Tooltip;
