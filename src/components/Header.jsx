import React from 'react'
import { FaChevronLeft, FaChevronRight, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <h1><span><FaChevronLeft /><FaChevronRight /></span><span>Rishi.Dev</span></h1>
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
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header