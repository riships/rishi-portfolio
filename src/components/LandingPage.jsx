import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Hero from '../views/Hero'
import HeroSection from './HeroSection'
import Services from './Services'
import Experience from './Experience'
import EducationResearch from './EducationResearch'
import RecentWorks from './RecentWorks'
import Skills from './Skills'
import FooterComponent from './FooterComponent'

function LandingPage() {
    return (
        <>
            <Header />
            <HeroSection />
            <Services />
            <Experience />
            <EducationResearch />
            <RecentWorks />
            <Skills />
            <FooterComponent />
        </>
    )
}

export default LandingPage