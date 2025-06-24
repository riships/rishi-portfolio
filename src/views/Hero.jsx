import React from "react";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-right">
        <div className="image-placeholder">
          <img src="/assets/hero-image.png" alt="Developer" />
        </div>
      </div>
      <div className="hero-grid">
        <div className="hero-left">
          <p className="intro-text">Hi, I’m</p>
          <h1 className="name-text">Aman</h1>
          <p className="role-text">{`{Full Stack}`}</p>
          <p className="dev-subtext">Web & App Developer_</p>
          <p className="location-text">Based in India</p>
          <a href="mailto:aman@gmail.com" className="email-link">aman@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
