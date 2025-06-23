import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light-theme');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light-theme';
        setTheme(savedTheme);
        if (savedTheme === 'dark-theme') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);

        document.documentElement.classList.toggle('dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`${theme} min-h-screen`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
