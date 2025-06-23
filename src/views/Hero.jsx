import React from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-[#7B4019] overflow-hidden">
      {/* Replaced transparent decorative shapes with custom CSS classes */}
      <div className="shape-circle-light" style={{ top: "10%", left: "15%" }} />
      <div className="shape-circle-dark" style={{ top: "40%", right: "10%" }} />
      <div className="shape-ring-dark" style={{ bottom: "10%", left: "20%" }} />

      {/* Semi-transparent geometric triangle shapes using CSS */}
      <div className="shape-triangle" style={{ top: "25%", left: "10%" }} />
      <div className="shape-triangle-dark" style={{ top: "60%", right: "25%" }} />

      {/* Subtle background gradient blobs using custom CSS */}
      <div className="blob-orange" style={{ top: "-120px", left: "-100px" }} />
      <div className="blob-brown" style={{ bottom: "-160px", right: "-130px" }} />

      {/* Animated waves at bottom */}
      <svg className="wave-motion absolute bottom-0 left-0 w-[200%] h-24 animate-wave -z-10" viewBox="0 0 2880 320" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#FFBF78"
          fillOpacity="0.3"
          d="M0,288L96,272C192,256,384,224,576,208C768,192,960,192,1152,186.7C1344,181,1536,171,1728,176C1920,181,2112,203,2304,208C2496,213,2688,203,2784,197.3L2880,192L2880,320L2784,320C2688,320,2496,320,2304,320C2112,320,1920,320,1728,320C1536,320,1344,320,1152,320C960,320,768,320,576,320C384,320,192,320,96,320L0,320Z"
        />
      </svg>

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-[#FFBF78] drop-shadow-[0_0_10px_#FFBF78]">Hi, I’m Rishi Soni</h1>
          <h2 className="text-xl text-[#FFBF78] mb-4">Frontend Developer | UI Enthusiast | JavaScript Expert</h2>
          <p className="text-[#F5D7BC] mb-6">
            Passionate about crafting responsive web apps and modern UIs.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-[#FFBF78] text-[#7B4019] px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#ffc488] shadow-md shadow-black/30">
              <FaDownload /> Download Resume
            </button>
            <button className="border border-[#FFBF78] text-[#FFBF78] px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#FFBF78] hover:text-[#7B4019] shadow-md shadow-black/30">
              <FaEnvelope /> Contact Me
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="/profile.svg" alt="Rishi Soni" className="w-64 h-64 mx-auto rounded-full shadow-lg shadow-[#FFBF78]/30" />
        </div>
      </div>
    </section>
  );
}
