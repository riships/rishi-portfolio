import React from 'react'
import { FaCode, FaDatabase, FaRocket, FaChartLine, FaShoppingCart, FaCogs } from 'react-icons/fa'
import '../assets/styles/Services.css'

function Services() {
    const services = [
        {
            icon: FaCode,
            title: 'Web & App Development',
            description: 'Crafting visually appealing and user-friendly interfaces with the latest technologies'
        },
        {
            icon: FaDatabase,
            title: 'Database Management',
            description: 'Crafting visually appealing and user-friendly interfaces with the latest technologies'
        },
        {
            icon: FaRocket,
            title: 'API Development',
            description: 'Crafting visually appealing and user-friendly interfaces with the latest technologies'
        },
        {
            icon: FaChartLine,
            title: 'Performance Optimization',
            description: 'Crafting visually appealing and user-friendly interfaces with the latest technologies'
        },
        {
            icon: FaShoppingCart,
            title: 'E-commerce Solutions',
            description: 'Crafting visually appealing and user-friendly interfaces with the latest technologies'
        },
        {
            icon: FaCogs,
            title: 'Integrating AI',
            description: 'Crafting visually appealing and user-friendly interfaces with the latest technologies'
        }
    ]

    return (
        <section className="services">
            <div className="services-container">
                <h2 className="services-title">
                    What do i offer
                    <br />
                    <span className="highlight-text">Designing Solutions Customized to Meet<br />Your Requirements</span>
                </h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">
                                <service.icon />
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="services-footer">
                    <p>Excited to take on new projects and collaborations.<br />Let's make your vision a reality. <span className="highlight-link">Read more</span></p>
                </div>
            </div>
        </section>
    )
}

export default Services
