import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaGithub, FaLinkedin } from 'react-icons/fa'



function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Let’s Connect</h2>
      <div className="container mx-auto px-6 lg:flex lg:space-x-12">
        <form className="flex-1 space-y-6" action="#" method="POST">
          <input type="text" name="name" placeholder="Full Name" required
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" />
          <input type="email" name="email" placeholder="Email Address" required
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" />
          <textarea name="message" rows="5" placeholder="Message" required
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"></textarea>
          <button type="submit" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition">
            Send Message
          </button>
        </form>
        <div className="flex-1 mt-12 lg:mt-0 space-y-4">
          <div className="flex items-center space-x-4">
            <CiMail className="w-6 h-6 text-purple-600" />
            <a href="mailto:rishi@example.com" className="text-purple-800 hover:underline">rishi@example.com</a>
          </div>
          <div className="flex items-center space-x-4">
            <FaGithub className="w-6 h-6 text-purple-600" />
            <a href="https://github.com/rishisoni" className="text-purple-800 hover:underline" target="_blank">github.com/rishisoni</a>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin className="w-6 h-6 text-purple-600" />
            <a href="https://linkedin.com/in/rishisoni" className="text-purple-800 hover:underline" target="_blank">linkedin.com/in/rishisoni</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
