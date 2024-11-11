import './Tooltip.css';
import { Component } from "react";

class Tooltip extends Component {
    render() {
        const { text, tooltipText } = this.props;
        return (
            <span className="tooltip">
                {text}
                <span className="tooltip-text">{tooltipText}</span>
            </span>
        );
    }
}

export default Tooltip;
