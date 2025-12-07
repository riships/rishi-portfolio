import React from 'react'
import '../assets/styles/TrustedBy.css'

function TrustedBy() {
    const logos = [
        { name: 'Google', src: '/logos/google.svg' },
        { name: 'Stripe', src: '/logos/stripe.svg' },
        { name: 'Visa', src: '/logos/visa.svg' },
        { name: 'Google', src: '/logos/google.svg' },
        { name: 'Samsung', src: '/logos/samsung.svg' },
        { name: 'Adobe', src: '/logos/adobe.svg' },
        { name: 'PayPal', src: '/logos/paypal.svg' },
        { name: 'MasterCard', src: '/logos/mastercard.svg' },
        { name: 'Toyota', src: '/logos/toyota.svg' },
        { name: 'Tesla', src: '/logos/tesla.svg' }
    ]

    const testimonials = [
        {
            name: 'Ravi Singh',
            role: 'Founder & CEO',
            company: 'Tech Ventures',
            avatar: '/avatars/ravi.jpg',
            rating: 5
        },
        {
            name: 'Priya Verma',
            role: 'Product Manager',
            company: 'Digital Solutions',
            avatar: '/avatars/priya.jpg',
            rating: 5
        },
        {
            name: 'Arjun Sharma',
            role: 'CTO',
            company: 'Innovation Labs',
            avatar: '/avatars/arjun.jpg',
            rating: 5
        }
    ]

    return (
        <section className="trusted-by">
            <div className="trusted-container">
                <div className="trusted-left">
                    <h3 className="trusted-title">
                        More than +158 companies trusted<br />
                        <span className="highlight-text">worldwide_</span>
                    </h3>
                    
                    <div className="logos-grid">
                        {logos.map((logo, index) => (
                            <div key={index} className="logo-item">
                                <img src={logo.src} alt={logo.name} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="trusted-right">
                    <h3 className="testimonials-title">
                        <span className="title-icon">✨</span> Testimonials
                    </h3>
                    
                    <div className="testimonials-list">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-item">
                                <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                                <div className="testimonial-content">
                                    <div className="testimonial-header">
                                        <h4>{testimonial.name}</h4>
                                        <span className="rating">⭐ +5.0</span>
                                    </div>
                                    <p className="role">{testimonial.role}</p>
                                    <p className="company">{testimonial.company}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrustedBy
