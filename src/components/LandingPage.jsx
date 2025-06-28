import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Hero from '../views/Hero'
import SplashCursor from './SplashCursor'

function LandingPage() {
    return (
        <>
            <SplashCursor />
            <Header />
            <Hero />
        </>
    )
}

export default LandingPage