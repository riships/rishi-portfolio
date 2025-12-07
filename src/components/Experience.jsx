import React from 'react'
import { FaBriefcase, FaCode, FaBook } from 'react-icons/fa'
import '../assets/styles/Experience.css'

function Experience() {
    const experiences = [
        {
            icon: FaBriefcase,
            company: 'Edunext Technologies Private Limited',
            title: 'Web Developer',
            description: 'Designed and developed responsive MERN applications. Built reusable React components and custom middleware. Delivered full-stack solutions with authentication and deployments on AWS, Vercel, and Render. (Sep 2022 – Oct 2025)'
        },
        {
            icon: FaCode,
            company: 'Magic Edtech',
            title: 'Digital Media Trainee',
            description: 'Built interactive and visually appealing EPUB interfaces. Used HTML, CSS, and JavaScript for e-book UI development and multimedia content creation. (Dec 2021 – Aug 2022)'
        },
        {
            icon: FaBook,
            company: 'Coding Ninjas',
            title: 'Training - Full Stack Development',
            description: 'Completed comprehensive Full Stack Web Development course covering Frontend, Backend, Java, and Data Structures with hands-on MERN stack projects.'
        }
    ]

    return (
        <section className="experience">
            <div className="experience-container">
                <h2 className="experience-title">
                    <span className="highlight-text">Experience</span>
                    <br />
                    4 years of expertise in<br />MERN Stack Development
                </h2>

                <div className="experience-list">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-icon">
                                <exp.icon />
                            </div>
                            <div className="experience-content">
                                <h3>{exp.company}</h3>
                                <h4>{exp.title}</h4>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
