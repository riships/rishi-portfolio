import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import '../assets/styles/HeroSection.css'
import userImg from '../assets/images/profile.png'

function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-left">
                    <div className="profile-image">
                        <img src={userImg} alt="Profile" />
                        <div className="online-badge"></div>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="role-label">
                        <span className="label-tag">Current</span>
                        <span className="label-text">Dec, 2025</span>
                        <span className="label-tag">Open</span>
                    </div>
                    <h2 className="hero-title">
                        Web Developer <span className="highlight">MERN</span> <br />
                        Stack
                    </h2>
                    <p className="hero-description">
                        Developer with 4 years of expertise in building responsive, scalable, and performance-driven web applications. Proficient in <span className="highlight">JavaScript</span>, <span className="highlight">Node.js</span>, <span className="highlight">React</span>, and <span className="highlight">MongoDB</span>. Focused on clean code, user experience, and cloud deployment. <span className="highlight-link">MERN Expert</span>
                    </p>
                    <div className="hero-stats">
                        <div className="stat">
                            <FaCheckCircle className="stat-icon" />
                            <a href="#" className="stat-link">Top Freelancer</a>
                        </div>
                        <div className="stat">
                            <FaCheckCircle className="stat-icon" />
                            <a href="#" className="stat-link">Best Seller</a>
                        </div>
                        <div className="stat">
                            <FaCheckCircle className="stat-icon" />
                            <a href="#" className="stat-link">More Info</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
