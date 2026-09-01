import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronLeft, FaChevronRight, FaArrowUp, FaMapMarkerAlt } from 'react-icons/fa'
import '../assets/styles/Footer.css'

function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <h2>
                                <span className="logo-brackets"><FaChevronLeft /><FaChevronRight /></span>
                                <span className="logo-text">Rishi.Dev</span>
                            </h2>
                        </div>
                        <p className="brand-desc">
                            Full Stack MERN Developer crafting high-performance, responsive web applications and scalable cloud backends.
                        </p>
                        <div className="location-badge">
                            <FaMapMarkerAlt /> India &bull; Open for Remote & On-Site Roles
                        </div>
                    </div>

                    <div className="footer-links-col">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-connect-col">
                        <h4>Connect with me</h4>
                        <div className="social-links-footer">
                            <a href="https://github.com/riships" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/rishiparakash" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="mailto:avviare.rishi@gmail.com" title="Email" aria-label="Email">
                                <FaEnvelope />
                            </a>
                        </div>
                        <p className="contact-direct">
                            Direct Email: <a href="mailto:avviare.rishi@gmail.com">avviare.rishi@gmail.com</a>
                        </p>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Rishi Prakash. All rights reserved.</p>
                    <button className="scroll-top-btn" onClick={scrollToTop} title="Back to top" aria-label="Back to top">
                        <span>Back to top</span>
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
