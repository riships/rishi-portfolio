import React from 'react'
import { FaUsers, FaFolderOpen, FaCheckCircle, FaHeadset } from 'react-icons/fa'
import '../assets/styles/StatsBar.css'

function StatsBar() {
    const stats = [
        { icon: FaUsers, value: '12+', label: 'Yrs. Experience' },
        { icon: FaFolderOpen, value: '150+', label: 'Projects Completed' },
        { icon: FaCheckCircle, value: '300+', label: 'Satisfied Clients' },
        { icon: FaHeadset, value: '18+', label: '24Hr Support' }
    ]

    return (
        <section className="stats-bar">
            <div className="stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card">
                        <stat.icon className="stat-icon" />
                        <h3 className="stat-value">{stat.value}</h3>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StatsBar
