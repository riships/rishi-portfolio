import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Hero from '../views/Hero'

function LandingPage() {
    return (
        <>
            <Header />
            <Hero />
        </>
    )
}

export default LandingPage