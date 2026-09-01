import React from 'react'
import {
    FaLaptopCode,
    FaServer,
    FaDatabase,
    FaCloud,
    FaTools,
    FaBrain,
    FaReact,
    FaJs,
    FaBootstrap,
    FaNodeJs,
    FaCode,
    FaLock,
    FaLayerGroup,
    FaAws,
    FaGitAlt,
    FaShieldAlt,
    FaCogs
} from 'react-icons/fa'
import {
    SiMongodb,
    SiVercel,
    SiPostman,
    SiJira,
    SiNestjs,
    SiDocker,
    SiGithubactions
} from 'react-icons/si'
import '../assets/styles/Skills.css'

function Skills() {
    const skillCategories = [
        {
            icon: <FaLaptopCode />,
            title: 'Frontend Development',
            skills: [
                { icon: <FaReact />, text: 'React.js, Redux & Context API' },
                { icon: <FaJs />, text: 'HTML5, CSS3 & JavaScript (ES6+)' },
                { icon: <FaBootstrap />, text: 'Bootstrap, Material-UI & Tailwind' }
            ]
        },
        {
            icon: <FaServer />,
            title: 'Backend Development',
            skills: [
                { icon: <SiNestjs />, text: 'NestJS, Node.js & Express.js' },
                { icon: <FaCogs />, text: 'Microservices Architecture' },
                { icon: <FaLock />, text: 'REST APIs, JWT Auth & Middleware' }
            ]
        },
        {
            icon: <FaDatabase />,
            title: 'Databases & Storage',
            skills: [
                { icon: <SiMongodb />, text: 'MongoDB & MongoDB Atlas' },
                { icon: <FaDatabase />, text: 'MySQL, PostgreSQL & DBMS' },
                { icon: <FaLayerGroup />, text: 'Data Modeling & Query Optimization' }
            ]
        },
        {
            icon: <FaCloud />,
            title: 'Cloud & DevOps',
            skills: [
                { icon: <FaAws />, text: 'AWS EC2, S3 & Docker Containers' },
                { icon: <SiGithubactions />, text: 'CI/CD Pipelines (GitHub Actions / Deployment)' },
                { icon: <SiVercel />, text: 'Vercel & Render Deployment' }
            ]
        },
        {
            icon: <FaTools />,
            title: 'Tools & Platforms',
            skills: [
                { icon: <FaGitAlt />, text: 'Git, GitHub & Monorepo Tooling' },
                { icon: <SiPostman />, text: 'Postman & API Testing' },
                { icon: <SiJira />, text: 'Jira, VS Code & npm Tooling' }
            ]
        },
        {
            icon: <FaBrain />,
            title: 'Architecture & Concepts',
            skills: [
                { icon: <FaLayerGroup />, text: 'Monorepo & Microservices Setup' },
                { icon: <FaCode />, text: 'RESTful API Design & Clean Code' },
                { icon: <FaShieldAlt />, text: 'Authentication & System Security' }
            ]
        }
    ]

    return (
        <section className="skills">
            <div className="skills-container">
                <h2 className="skills-title">
                    <span className="highlight-text">My Skills</span>
                </h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-header">
                                <div className="skill-icon">{category.icon}</div>
                                <h3>{category.title}</h3>
                            </div>
                            <ul className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className="skill-item">
                                        <span className="item-icon">{skill.icon}</span>
                                        <span className="item-text">{skill.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
