import './Button.css';
import React from "react";


interface ButtonProps {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary';
}

const Button = ({ label, onClick, variant = 'secondary' }: ButtonProps) => {
    return (
        <button className={`button ${variant}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button
