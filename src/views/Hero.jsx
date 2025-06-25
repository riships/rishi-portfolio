import React from "react";
import userImg from '../assets/images/about-img.png'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-main">
          <div className="hero-left">
            <div className="image-placeholder">
              <img src={userImg} alt="Developer" />
              <div id="pentagon">
                <span><FaChevronLeft /><FaChevronRight /></span>
                <span className="pentagon-bg">
                  <svg fill="currentColor" width="50px" height="50px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="m448.67 207.49 142.22 103.33c14.176 10.262 24.738 24.75 30.168 41.387 5.4297 16.637 5.4531 34.562 0.0625 51.215l-54.461 167.21c-5.4062 16.629-15.934 31.125-30.078 41.402-14.145 10.281-31.184 15.824-48.668 15.828h-175.83c-17.484-0.003906-34.52-5.5469-48.668-15.828-14.145-10.277-24.672-24.773-30.074-41.402l-54.312-167.21c-5.3906-16.652-5.3672-34.578 0.0625-51.215 5.4297-16.637 15.992-31.125 30.168-41.387l142.07-103.33c14.145-10.273 31.184-15.805 48.668-15.805s34.52 5.5312 48.668 15.805z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="hero-grid">
            <div className="hero-right">
              <p className="intro-text"><span>&lt;span&gt;</span><span> Hey, I'm Rishi </span><span>&lt;/span&gt;</span></p>
              <h1 className="name-text">
                Senior <span>{`{Full Stack}`}</span><br />
                Web & App Developer_
              </h1>
              <p className="expertise-text"><span>&lt;p&gt;</span> With experties in cutting edge technologies, such as <span>React, Node.js,MongoDB</span> and <span>Express</span>... i deliver web solutions that are both innovative and Robust. <span>&lt;/p&gt;</span></p>
              <div className="skillIcons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                <span>... and more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

