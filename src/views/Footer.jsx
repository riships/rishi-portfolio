import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 lg:flex lg:justify-between">
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="flex space-x-6 my-6 lg:my-0">
          <a href="https://linkedin.com/in/rishisoni" target="_blank" className="hover:text-white">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/rishisoni" target="_blank" className="hover:text-white">
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-6 lg:mt-0">
          <p>© 2025 Rishi Soni. Made with ❤️</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
