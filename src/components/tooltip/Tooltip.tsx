import './Tooltip.css';


type TooltipProps = {
    text: string;
    tooltipText: string;
};

const Tooltip = ({ text, tooltipText }: TooltipProps) => {
    return (
        <span className="tooltip">
            {text}
            <span className="tooltip-text">{tooltipText}</span>
        </span>
    );
};

export default Tooltip;
