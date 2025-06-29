import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Hero from '../views/Hero'
import SplashCursor from './SplashCursor'
import WhatDoIOffer from '../views/WhatDoIOffer'

function LandingPage() {
    return (
        <>
            <SplashCursor />
            <Header />
            <Hero />
            <WhatDoIOffer />
        </>
    )
}

export default LandingPage