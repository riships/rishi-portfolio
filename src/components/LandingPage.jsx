import React from 'react'
import { Outlet } from 'react-router-dom'
import Hero from '../views/Hero'
import TechStack from '../views/TechStack'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Footer from '../views/Footer'

function LandingPage() {
    return (
        <>
            <Hero />
            <TechStack />
            <Projects />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default LandingPage