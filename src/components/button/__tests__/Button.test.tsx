import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";


describe('Button Component ', () => {
    it('should render the button with provided label', () => {
        const label = 'Click Me!';
        render(<Button label={label} />);
        const buttonElement = screen.getByText(label);
        expect(buttonElement).toBeInTheDocument();
    });

    it('should have the correct class based on the variant', () => {
        const { rerender } = render(<Button label="Test" variant="primary" />);
        const buttonElementPrimary = screen.getByText('Test');
        expect(buttonElementPrimary).toHaveClass('button primary');

        rerender(<Button label="Test" variant="secondary" />);
        const buttonElementSecondary = screen.getByText('Test');
        expect(buttonElementSecondary).toHaveClass('button secondary');
    });

    it('should call onClick prop when clicked', () => {
        const handleClick = jest.fn();
        render(<Button label="Click Me" onClick={handleClick} />);
        const buttonElement = screen.getByText('Click Me');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});