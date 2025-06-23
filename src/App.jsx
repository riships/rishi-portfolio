import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Hero from './views/Hero'
import TechStack from './views/TechStack'
import Projects from './views/Projects'
import About from './views/About'
import Contact from './views/Contact'
import Footer from './views/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="bg-black text-white font-poppins min-h-screen">
          <nav className="bg-gray-950 px-6 py-4 flex justify-center gap-6 text-orange-400 text-lg">
            <Link to="/">Home</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<TechStack />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
