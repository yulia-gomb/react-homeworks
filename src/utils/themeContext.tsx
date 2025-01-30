import React, { createContext, useContext, ReactNode, useState, useEffect, FC } from 'react';

export type Theme = 'light' | 'dark';
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const defaultState: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => {}
};

const ThemeContext = createContext<ThemeContextType>(defaultState);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;
        const localTheme = localStorage.getItem('theme');
        let initialTheme: Theme = 'light';

        if (localTheme) {
            initialTheme = localTheme as Theme;
        } else if (prefersDarkMode) {
            initialTheme = 'dark';
        } else if (prefersLightMode) {
            initialTheme = 'light';
        }

        setTheme(initialTheme);
        document.body.className = initialTheme;
        localStorage.setItem('theme', initialTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
