import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import Header from '../components/Header';
import '../assets/styles/About.css';

const soft = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Clean Code",
];

function About() {
  return (
    <>
      <Header />
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-title">About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img
                src="https://via.placeholder.com/280x280?text=Profile"
                alt="Rishi Soni"
              />
            </div>
            <div className="about-text">
              <p className="about-description">
                I'm Rishi Prakash Soni, a Web Developer with 4 years of experience
                in building responsive, scalable, and performance-driven web applications using the MERN stack. Specialized in JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, and API integration. Passionate about writing clean code, delivering exceptional user experiences, and deploying applications on cloud platforms like AWS, Vercel, and Render.
              </p>
              <div className="skills-grid">
                {
                  soft.map((skill, idx) => (
                    <div key={idx} className="skill-card">
                      <FaUserAlt className="skill-icon" />
                      <span>{skill}</span>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
