import React, { useState } from 'react';
import { CiMail } from 'react-icons/ci';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Header from '../components/Header';
import ConfirmationModal from '../components/ConfirmationModal';
import '../assets/styles/Contact.css';

const DEFAULT_GMAIL_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvGQMg345ctORNmnNKGgBnXEUOjWXuCFZHJlji5eyDsneSIwlxtnV74cT2Cv7ExgPUzw/exec';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: 'success',
    title: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const gmailScriptUrl = import.meta.env.VITE_GMAIL_SCRIPT_URL || DEFAULT_GMAIL_SCRIPT_URL;
    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        // Send using EmailJS directly in background
        await emailjs.send(
          emailjsServiceId,
          emailjsTemplateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'avviare.rishi@gmail.com'
          },
          emailjsPublicKey
        );
      } else if (gmailScriptUrl) {
        // Direct background fetch to Google Apps Script Gmail endpoint (no redirection)
        await fetch(gmailScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            to: 'avviare.rishi@gmail.com'
          })
        });
      } else {
        // Background AJAX fetch fallback to formsubmit endpoint (no redirection)
        await fetch('https://formsubmit.co/ajax/avviare.rishi@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `New Portfolio Message from ${formData.name}`
          })
        });
      }

      // Show in-app confirmation popup modal & reset form
      setModalConfig({
        isOpen: true,
        type: 'success',
        title: 'Message Sent Successfully!',
        message: `Thank you, ${formData.name}! Your message has been sent to Rishi. I will get back to you at ${formData.email} as soon as possible.`
      });
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Contact Form Error:', error);
      setModalConfig({
        isOpen: true,
        type: 'error',
        title: 'Failed to Send Message',
        message: 'Something went wrong while delivering your message. Please try again or reach out directly at avviare.rishi@gmail.com.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }));
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
                disabled={isSubmitting}
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email Address" 
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                disabled={isSubmitting}
              />
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Message" 
                required
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                disabled={isSubmitting}
              ></textarea>
              <button 
                type="submit" 
                className="submit-btn" 
                disabled={isSubmitting}
                style={isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
            <div className="contact-info">
              <div className="info-item">
                <CiMail className="info-icon" />
                <a href="mailto:avviare.rishi@gmail.com">avviare.rishi@gmail.com</a>
              </div>
              <div className="info-item">
                <FaGithub className="info-icon" />
                <a href="https://github.com/riships" target="_blank" rel="noopener noreferrer">github.com/riships</a>
              </div>
              <div className="info-item">
                <FaLinkedin className="info-icon" />
                <a href="https://linkedin.com/in/rishiparakash" target="_blank" rel="noopener noreferrer">linkedin.com/in/rishiparakash</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConfirmationModal 
        isOpen={modalConfig.isOpen}
        type={modalConfig.type}
        title={modalConfig.title}
        message={modalConfig.message}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Contact;
