import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';
type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const defaultState: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => {}
};

const ThemeContext = createContext<ThemeContextType>(defaultState);

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const localTheme = localStorage.getItem('theme');
        const initialTheme = localTheme ? (localTheme as Theme) : prefersDarkMode ? 'dark' : 'light';

        setTheme(initialTheme);
        document.body.className = initialTheme;

        console.log("Initialized theme:", initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);

        console.log("Current theme:", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};