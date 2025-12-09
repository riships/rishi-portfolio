import React from 'react'
import { FaChevronLeft, FaChevronRight, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaSun, FaMoon } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import '../assets/styles/ThemeToggle.css'

function Header() {
    const { theme, toggleTheme } = useTheme()

    return (
        <>
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
            <header className='header'>
                <div className='logo'>
                    <Link to='/' className='logo-link'>
                        <h1><span><FaChevronLeft /><FaChevronRight /></span><span>Rishi.Dev</span></h1>
                    </Link>
                </div>
                <div className='nav'>
                    <ul>
                        <li><Link to={'/about'}> About Me</Link></li>
                        <li><Link to={'/resume'}> Resume</Link></li>
                        <li><Link to={'/contact'}> Contact</Link></li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul>
                        <li>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header