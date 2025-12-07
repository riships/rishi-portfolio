import React from 'react'
import '../assets/styles/Skills.css'

function Skills() {
    const skillCategories = [
        {
            icon: '🎨',
            title: 'Frontend',
            skills: ['React.js, Redux, Context API', 'HTML5, CSS3, JavaScript (ES6+)', 'Bootstrap, Material-UI, jQuery']
        },
        {
            icon: '🛠️',
            title: 'Backend',
            skills: ['Node.js, Express.js', 'REST APIs, JWT Authentication', 'Middleware Development, CryptoJS']
        },
        {
            icon: '🗄️',
            title: 'Databases',
            skills: ['MongoDB, MongoDB Atlas', 'MySQL, DBMS', 'Data Modeling & Optimization']
        },
        {
            icon: '⚙️',
            title: 'Cloud & DevOps',
            skills: ['AWS EC2, AWS S3', 'Vercel, Render Deployment', 'CI/CD Pipelines']
        },
        {
            icon: '🔐',
            title: 'Tools & Platforms',
            skills: ['VS Code, Sublime Text 3', 'Jira, Git, GitHub', 'npm, Postman, API Testing']
        },
        {
            icon: '🧠',
            title: 'Skills & Concepts',
            skills: ['Object-Oriented Programming (OOP)', 'RESTful API Design', 'Authentication & Authorization']
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
                            <div className="skill-icon">{category.icon}</div>
                            <h3>{category.title}</h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex}>• {skill}</li>
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
