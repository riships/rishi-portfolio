import React, { useEffect, useState, useRef } from 'react'
import '../assets/styles/CustomCursor.css'

function CustomCursor() {
    const dotRef = useRef(null)
    const ringRef = useRef(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    // Position coordinates
    const mousePos = useRef({ x: -100, y: -100 })
    const ringPos = useRef({ x: -100, y: -100 })
    const animationFrameId = useRef(null)

    useEffect(() => {
        // Detect touch devices and disable custom cursor
        if (window.matchMedia('(pointer: coarse)').matches) {
            return
        }

        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY }
            if (!isVisible) setIsVisible(true)

            // Direct update for inner dot to eliminate input lag
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
            }
        }

        const handleMouseDown = () => setIsClicked(true)
        const handleMouseUp = () => setIsClicked(false)
        const handleMouseLeave = () => setIsVisible(false)
        const handleMouseEnter = () => setIsVisible(true)

        // Delegate hover detection for clickable elements
        const handleMouseOver = (e) => {
            const target = e.target
            if (
                target.closest('a') ||
                target.closest('button') ||
                target.closest('input') ||
                target.closest('textarea') ||
                target.closest('select') ||
                target.closest('[role="button"]') ||
                target.closest('.interactive') ||
                target.closest('.card') ||
                target.closest('.clickable')
            ) {
                setIsHovered(true)
            }
        }

        const handleMouseOut = (e) => {
            const target = e.target
            if (
                target.closest('a') ||
                target.closest('button') ||
                target.closest('input') ||
                target.closest('textarea') ||
                target.closest('select') ||
                target.closest('[role="button"]') ||
                target.closest('.interactive') ||
                target.closest('.card') ||
                target.closest('.clickable')
            ) {
                setIsHovered(false)
            }
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('mouseout', handleMouseOut)
        document.body.addEventListener('mouseleave', handleMouseLeave)
        document.body.addEventListener('mouseenter', handleMouseEnter)

        // Smooth lerp loop for the outer trailing circle ring
        const render = () => {
            const ease = 0.18 // Damping factor for fluid trailing motion
            ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease
            ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease

            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`
            }

            animationFrameId.current = requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('mouseout', handleMouseOut)
            document.body.removeEventListener('mouseleave', handleMouseLeave)
            document.body.removeEventListener('mouseenter', handleMouseEnter)
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current)
            }
        }
    }, [isVisible])

    return (
        <div className={`custom-cursor-container ${isVisible ? 'cursor-visible' : 'cursor-hidden'}`}>
            {/* Center solid round dot */}
            <div
                ref={dotRef}
                className={`cursor-dot ${isHovered ? 'dot-hover' : ''} ${isClicked ? 'dot-clicked' : ''}`}
            />
            {/* Outer smooth trailing circle ring */}
            <div
                ref={ringRef}
                className={`cursor-ring ${isHovered ? 'ring-hover' : ''} ${isClicked ? 'ring-clicked' : ''}`}
            />
        </div>
    )
}

export default CustomCursor
