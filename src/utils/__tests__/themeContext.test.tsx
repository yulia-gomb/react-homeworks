import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { ThemeProvider, useTheme } from "../themeContext";


interface CustomWindow extends Window {
    matchMedia: jest.Mock;
}

declare let window: CustomWindow;

const TestComponent: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <span>Current theme: {theme}</span>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

describe('ThemeProvider', () => {
    beforeEach(() => {
        window.matchMedia = jest.fn().mockImplementation((query: string) => ({
            matches: query === '(prefers-color-scheme: dark)',
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            addListener: jest.fn(),
            removeListener: jest.fn()
        }));

        Storage.prototype.getItem = jest.fn();
        Storage.prototype.setItem = jest.fn();
    });

    afterEach(() => {
        cleanup();
        jest.resetAllMocks();
    });

    it('should toggle theme from light to dark', () => {
        Storage.prototype.getItem = jest.fn(() => 'light');
        const { getByText } = render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );

        expect(getByText('Current theme: light')).toBeInTheDocument();
        fireEvent.click(getByText('Toggle Theme'));
        expect(getByText('Current theme: dark')).toBeInTheDocument();
        expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
        expect(document.body.className).toBe('dark');
    });

    it('should toggle theme from dark to light', () => {
        Storage.prototype.getItem = jest.fn(() => 'dark');
        const { getByText } = render(
            <ThemeProvider>
                <TestComponent />
            </ThemeProvider>
        );

        expect(getByText('Current theme: dark')).toBeInTheDocument();
        fireEvent.click(getByText('Toggle Theme'));
        expect(getByText('Current theme: light')).toBeInTheDocument();
        expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
        expect(document.body.className).toBe('light');
    });
});
