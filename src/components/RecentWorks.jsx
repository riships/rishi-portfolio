import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import '../assets/styles/RecentWorks.css'

function RecentWorks() {
    const projects = [
        {
            title: 'Inventory Management System',
            description: 'Full-stack inventory management platform with user authentication, interactive dashboards, mapping APIs, cloud storage, and AWS deployment. Built with MERN stack, Redux, and Material-UI.',
            image: '/projects/inventory.jpg',
            tags: ['MERN', 'Redux', 'Material-UI', 'AWS EC2/S3', 'Bootstrap'],
            client: 'Edunext Technologies',
            duration: '3 Months',
            liveDemo: '#',
            github: '#'
        },
        {
            title: 'Asset Management System',
            description: 'Comprehensive system to track assets, availability, and maintenance logs. Features role-based access control, secure authentication, and cloud storage integration with AWS S3.',
            image: '/projects/asset-management.jpg',
            tags: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Redux', 'AWS S3'],
            client: 'Edunext Technologies',
            duration: '2 Months',
            liveDemo: '#',
            github: '#'
        },
        {
            title: 'Real-Time Chat Application',
            description: 'Real-time messaging application with Socket.io integration, MongoDB Atlas persistence, user authentication, and deployment on both Vercel and Render for scalability.',
            image: '/projects/chat-app.jpg',
            tags: ['Node.js', 'Socket.io', 'MongoDB Atlas', 'Express.js', 'Vercel', 'Render'],
            client: 'Personal Project',
            duration: '2 Months',
            liveDemo: '#',
            github: '#'
        }
    ]

    return (
        <section className="recent-works">
            <div className="works-container">
                <h2 className="works-title">
                    <span className="title-icon">⚡</span> Recent Works
                </h2>

                <div className="works-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="work-card">
                            <div className="work-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="work-content">
                                <h3>{project.title}</h3>
                                <p className="work-description">{project.description}</p>
                                
                                <div className="work-details">
                                    <div className="detail-item">
                                        <span className="label">Client</span>
                                        <span className="value">{project.client}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="label">Completion Time</span>
                                        <span className="value">{project.duration}</span>
                                    </div>
                                </div>

                                <div className="work-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className="tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="work-links">
                                    <a href={project.liveDemo} className="link-btn live-demo">
                                        Live Demo
                                        <FaExternalLinkAlt />
                                    </a>
                                    <a href={project.github} className="link-btn github">
                                        View on GitHub
                                        <FaGithub />
                                    </a>
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
