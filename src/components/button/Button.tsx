import './Button.css';


interface ButtonProps {
    label: string;
    onClick?: () => void;
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
