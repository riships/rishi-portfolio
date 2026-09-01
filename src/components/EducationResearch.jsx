import React from 'react'
import { FaGraduationCap, FaBook } from 'react-icons/fa'
import '../assets/styles/EducationResearch.css'

function EducationResearch() {
    const education = [
        {
            period: 'July 2026 – Present',
            degree: 'Master of Computer Applications (MCA) in AI & ML',
            school: 'Chandigarh University',
            icon: FaGraduationCap
        },
        {
            period: '2018 – 2021',
            degree: "Bachelor's in Computer Applications (BCA)",
            school: 'Singhania University, Rajasthan (CGPA: 7.24)',
            icon: FaGraduationCap
        },
        {
            period: '2021 – 2022',
            degree: 'Full Stack Web Development Certification',
            school: 'Coding Ninjas - Frontend, Backend, Java & Data Structures',
            icon: FaBook
        }
    ]

    return (
        <section className="education-research">
            <div className="edu-research-container">
                <div className="education-section">
                    <h3 className="section-title">
                        <span className="icon">🎓</span> Education & Academic Background
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
            </div>
        </section>
    )
}

export default EducationResearch
