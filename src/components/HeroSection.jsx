import React from 'react'
import { FaPaperPlane, FaDownload } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../assets/styles/HeroSection.css'
import userImg from '../assets/images/profile2.png'

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-left">
                    <div className="profile-wrapper">
                        <div className="profile-image">
                            <img src={userImg} alt="Rishi Prakash" />
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="role-label">
                        <span className="label-tag">Available</span>
                        <span className="label-text">Remote & On-Site Roles</span>
                    </div>
                    <h2 className="hero-title">
                        Full Stack Developer <span className="highlight">MERN</span> <br />
                        Stack
                    </h2>
                    <p className="hero-description">
                        Results-driven Full Stack Engineer with <span className="highlight">4+ years</span> of experience building modern, responsive, and performance-optimized web solutions using the <span className="highlight">MERN stack</span>. Passionate about <span className="highlight">clean code</span>, robust <span className="highlight">API architecture</span>, and <span className="highlight-link">AWS cloud deployment</span>.
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="hero-btn primary-btn">
                            <FaPaperPlane />
                            <span>Contact Me</span>
                        </Link>
                        <a href="/Rishi_Fullstack_Resume_4years.pdf" download className="hero-btn secondary-btn">
                            <FaDownload />
                            <span>Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
