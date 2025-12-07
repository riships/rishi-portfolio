import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import '../assets/styles/ThemeToggle.css'

function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
            {theme === 'dark' ? (
                <FaSun className="toggle-icon sun-icon" />
            ) : (
                <FaMoon className="toggle-icon moon-icon" />
            )}
        </button>
    )
}

export default ThemeToggle
