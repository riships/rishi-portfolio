import React, { useState } from 'react'
import { CiMail } from 'react-icons/ci'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from '../components/Header';
import '../assets/styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Header />
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Let's Connect</h2>
          <div className="contact-content">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Full Name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Message" 
                required
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
              ></textarea>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
            <div className="contact-info">
              <div className="info-item">
                <CiMail className="info-icon" />
                <a href="mailto:avviare.rishi@gmail.com">avviare.rishi@gmail.com</a>
              </div>
              <div className="info-item">
                <FaGithub className="info-icon" />
                <a href="https://github.com/rishisoni" target="_blank" rel="noopener noreferrer">github.com/rishisoni</a>
              </div>
              <div className="info-item">
                <FaLinkedin className="info-icon" />
                <a href="https://linkedin.com/in/rishi-prakash-soni" target="_blank" rel="noopener noreferrer">linkedin.com/in/rishi-prakash-soni</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
