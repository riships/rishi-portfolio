import React from 'react'
import { FaGraduationCap, FaBook } from 'react-icons/fa'
import '../assets/styles/EducationResearch.css'

function EducationResearch() {
    const education = [
        {
            period: '2018-2021',
            degree: "Bachelor's in Computer Applications",
            school: 'Singhania University, Rajasthan (CGPA: 7.24)',
            icon: FaGraduationCap
        },
        {
            period: '2021-2022',
            degree: 'Full Stack Web Development',
            school: 'Coding Ninjas - Frontend, Backend, Java, Data Structures',
            icon: FaBook
        }
    ]

    const research = [
        {
            title: 'MERN Stack Architecture & Patterns',
            description: 'Mastered full-stack development with React, Express, MongoDB, and Node.js for building scalable web applications'
        },
        {
            title: 'Cloud Deployment & DevOps',
            description: 'Expertise in deploying applications on AWS EC2, S3, Vercel, and Render with CI/CD pipelines'
        },
        {
            title: 'REST APIs & Database Design',
            description: 'Built robust REST APIs with JWT authentication, optimized MongoDB queries, and secure data modeling'
        }
    ]

    return (
        <section className="education-research">
            <div className="edu-research-container">
                <div className="education-section">
                    <h3 className="section-title">
                        <span className="icon">📚</span> Education
                    </h3>
                    <div className="education-list">
                        {education.map((edu, index) => (
                            <div key={index} className="education-item">
                                <div className="edu-icon">
                                    <edu.icon />
                                </div>
                                <div className="edu-content">
                                    <div className="edu-period">{edu.period}</div>
                                    <h4>{edu.degree}</h4>
                                    <p>{edu.school}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="research-section">
                    <h3 className="section-title">
                        <span className="icon">🔬</span> Researched
                    </h3>
                    <div className="research-list">
                        {research.map((res, index) => (
                            <div key={index} className="research-item">
                                <h4>{res.title}</h4>
                                <p>{res.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EducationResearch
