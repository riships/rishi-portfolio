import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Hero from '../views/Hero'
import SplashCursor from './SplashCursor'
import HeroSection from './HeroSection'
import StatsBar from './StatsBar'
import TrustedBy from './TrustedBy'
import Services from './Services'
import Experience from './Experience'
import EducationResearch from './EducationResearch'
import RecentWorks from './RecentWorks'
import Skills from './Skills'
import FooterComponent from './FooterComponent'

function LandingPage() {
    return (
        <>
            <SplashCursor />
            <Header />
            <HeroSection />
            <StatsBar />
            <TrustedBy />
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