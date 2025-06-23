import React from 'react'
import { FaUserAlt } from "react-icons/fa";
const soft = [
  "Collaboration",
  "Problem-solving",
  "Communication",
  "Time management",
];


function About() {
  return (
    <>
      <section className="py-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">About Me</h2>
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-center lg:gap-[30px] lg:space-x-12">
          <img
            src="/avatar.png"
            alt="Rishi Soni"
            className="w-64 h-64 rounded-xl object-cover shadow-lg mx-auto lg:mx-0"
          />
          <div className="mt-8 lg:mt-0 space-y-6">
            <p className="text-gray-700 max-w-prose">
              I’m Rishi Soni, a Frontend Developer with 2+ years of experience
              building responsive, high‑performance web applications. Skilled in
              JavaScript (ES6+), React, Node.js, and UI frameworks like Bootstrap. I
              enjoy building things that live on the internet and make users' lives
              easier.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {
                soft.map((skill) => (
                  <div className="flex items-center bg-purple-50 p-4 rounded-lg">
                    <FaUserAlt className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-gray-800">{skill}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About