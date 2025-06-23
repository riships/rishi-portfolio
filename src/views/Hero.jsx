import React from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-[#FFBF78] overflow-hidden">
      {/* Transparent decorative shapes */}
      <div className="shape-circle-light" style={{ top: "10%", left: "15%" }} />
      <div className="shape-circle-dark" style={{ top: "40%", right: "10%" }} />
      <div className="shape-ring-dark" style={{ bottom: "10%", left: "20%" }} />

      {/* Semi-transparent geometric triangle shapes using CSS */}
      <div className="shape-triangle" style={{ top: "25%", left: "10%" }} />
      <div className="shape-triangle-dark" style={{ top: "60%", right: "25%" }} />

      {/* Subtle background gradient blobs */}
      <div className="blob-orange" style={{ top: "-120px", left: "-100px" }} />
      <div className="blob-brown" style={{ bottom: "-160px", right: "-130px" }} />

      {/* Main content container */}
      

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-center gap-12 backdrop-blur-xl rounded-2xl p-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-[#7B4019] drop-shadow-[0_0_10px_#FFBF78]">Hi, I’m Rishi Soni</h1>
          <h2 className="text-xl text-[#7B4019] mb-4">Frontend Developer | UI Enthusiast | JavaScript Expert</h2>
          <p className="text-[#4B2A15] mb-6">
            Passionate about crafting responsive web apps and modern UIs.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <button className="bg-[#7B4019] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#A15528] shadow-md shadow-[#FFBF78]/50">
              <FaDownload /> Download Resume
            </button>
            <button className="border border-[#7B4019] text-[#7B4019] px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#7B4019] hover:text-white shadow-md shadow-[#FFBF78]/50">
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