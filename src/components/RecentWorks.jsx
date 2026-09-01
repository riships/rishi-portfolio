import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaBuilding, FaClock, FaRocket, FaLock, FaShieldAlt } from 'react-icons/fa'
import chatterAppImg from '../assets/images/project/chatter-app.png'
import '../assets/styles/RecentWorks.css'

function RecentWorks() {
    const projects = [
        {
            title: 'Inventory Management System',
            description: 'Full-stack enterprise inventory platform with user authentication, real-time analytics, stock tracking dashboard, mapping APIs, and AWS deployment. Built with MERN stack, Redux, and Material-UI.',
            image: null,
            tags: ['MERN Stack', 'Redux', 'AWS EC2/S3', 'Material-UI', 'Node.js'],
            client: 'Edunext Technologies',
            duration: '3 Months',
            isEnterprise: true,
            liveDemo: null,
            github: null
        },
        {
            title: 'Asset Management System',
            description: 'Comprehensive enterprise asset tracking platform with role-based access control (RBAC), asset status analytics, equipment logs, and cloud storage integration with AWS S3.',
            image: null,
            tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'Redux'],
            client: 'Edunext Technologies',
            duration: '2 Months',
            isEnterprise: true,
            liveDemo: null,
            github: null
        },
        {
            title: 'Chatter App (Real-Time Chat)',
            description: 'Full-featured real-time chat & messaging application with Socket.io web sockets, MongoDB Atlas persistence, JWT authentication, and multi-cloud deployment on Vercel and Render.',
            image: chatterAppImg,
            tags: ['React.js', 'Node.js', 'Socket.io', 'MongoDB Atlas', 'Vercel', 'Render'],
            client: 'Personal Project',
            duration: '2 Months',
            isEnterprise: false,
            liveDemo: null,
            github: 'https://github.com/riships/chatter-app'
        }
    ]

    return (
        <section className="recent-works" id="projects">
            <div className="recent-works-container">
                <div className="works-header-block">
                    <span className="works-badge">
                        <FaRocket /> Portfolio Highlights
                    </span>
                    <h2 className="recent-works-title">
                        Featured <span className="highlight-text">Projects</span>
                    </h2>
                    <p className="works-subtitle">
                        A showcase of full-stack MERN web applications, scalable backends, and cloud-deployed systems.
                    </p>
                </div>

                <div className="works-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="work-card">
                            <div className={`work-image-wrapper ${!project.image ? 'enterprise-banner' : ''}`}>
                                {project.image ? (
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                ) : (
                                    <div className="enterprise-banner-content">
                                        <FaShieldAlt className="banner-icon" />
                                        <span>Enterprise Solution</span>
                                    </div>
                                )}
                                <div className="image-overlay"></div>
                                <span className="client-pill">
                                    <FaBuilding /> {project.client}
                                </span>
                            </div>
                            <div className="work-content">
                                <div className="work-title-row">
                                    <h3>{project.title}</h3>
                                    <span className="duration-tag">
                                        <FaClock /> {project.duration}
                                    </span>
                                </div>
                                <p className="work-description">{project.description}</p>

                                <div className="work-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="work-links">
                                    {project.liveDemo && project.liveDemo !== '#' && (
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="link-btn live-demo">
                                            <span>Live Demo</span>
                                            <FaExternalLinkAlt />
                                        </a>
                                    )}
                                    {project.github && project.github !== '#' ? (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn github">
                                            <FaGithub />
                                            <span>View on GitHub</span>
                                        </a>
                                    ) : (
                                        <span className="enterprise-status-badge">
                                            <FaLock /> Proprietary Enterprise Project
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default RecentWorks
