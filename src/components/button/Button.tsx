import './Button.css';


interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'secondary' }) => {
    return (
        <button className={`button ${variant}`} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button
