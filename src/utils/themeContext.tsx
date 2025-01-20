import React, { createContext, useContext, ReactNode, useState } from 'react';

type Theme = 'light' | 'dark';
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const defaultState = {
    theme: 'light' as Theme,
    toggleTheme: () => {}
};

const ThemeContext = createContext<ThemeContextType>(defaultState);

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.classList.toggle('dark-theme');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};