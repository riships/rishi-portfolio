import React from 'react'
import Header from '../components/Header';
import '../assets/styles/Resume.css';

function Resume() {
  return (
    <>
      <Header />
      <section className="resume-section">
        <div className="resume-container">
          <div className="resume-header">
            <h2 className="resume-title">Resume</h2>
            <a href="/Rishi_Fullstack_Resume_4years.pdf" download className="download-btn">
              Download PDF
            </a>
          </div>
          
          <div className="resume-content">
            <iframe
              src="/Rishi_Fullstack_Resume_4years.pdf"
              title="Rishi's Resume"
              className="resume-iframe"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
