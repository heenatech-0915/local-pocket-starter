import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { animated, useSpring } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion } from "framer-motion"
// Components.
import WindowSize from './windowsSize'
import Footer from '../components/footerMobile'
import IndexNavBar from './indexNavBar'
// Styling.
import styles from '../styles/home_mobile.module.css'

function HomeMobile() {
    const parallaxRef = useRef()
    const [ width, height ] = WindowSize()

    // This means changing one sections offset will auto push the later sections down correctly,
    // making factor (size) changes easier to manage.
    const sizeS1 = 1
    const sizeS2 = 0.8
    const sizeS3 = 3.5
    const sizeS4 = 1
    const sizeS5 = 1.5
    const sizeS6 = 2.8
    const sizeS7 = 0.4

    // DONT CHANGE THESE, ONLY CHANGE ABOVE SIZES
    const offsetS1 = 0
    const offsetS2 = offsetS1+sizeS1
    const offsetS3 = offsetS2+sizeS2
    const offsetS4 = offsetS3+sizeS3
    const offsetS5 = offsetS4
    const offsetS6 = offsetS5+sizeS5
    const offsetS7 = offsetS6+sizeS6
    const offsetS8 = offsetS7+sizeS7

    // Total number of 'pages' on screen.
    const totalPages = offsetS8
    // Total scrolled so far.
    const [ scroll, setScroll ] = useState(0)
    // Full height of the entire parallax page
    const [ fullHeight, setFullHeight ] = useState(1)
    // Height in pixels of single page
    const pixelSinglePage = fullHeight/totalPages
    // Get % scrolled down the entire parallax page. Scroll counts from top of screen so doesnt count final screen, so to compensate work out single page height and minus that from total height of the page.
    const percentScrolled = (scroll/fullHeight)*100
    // Get % that a single page within parallax equals
    const percentSinglePage = ((fullHeight/totalPages)/fullHeight)*100

    useEffect(() => {
        // Get the height of the parallax element
        // console.log(springRef.current.content.current.scrollHeight)
        // Add event listener to the scroll of parallax using useRef - normal window scroll doesnt work.
        parallaxRef.current.container.current.addEventListener("scroll", (e) => {
            setScroll(e.target.scrollTop)
        })
    }, [])

    useEffect(() => {
        if (parallaxRef.current.content && parallaxRef.current.content.current) {
            setFullHeight(parallaxRef.current.content.current.offsetHeight - window.innerHeight)
            // console.log('height of whole', parallaxRef.current.content.current.parentNode.scrollTop)
            // setFullHeight(parallaxRef.current.content.current.scrollHeight)
        }
    })

    const scaleUp = useSpring({
        position: 'absolute',
        height: '100vh',
        scale: 1.5-(percentScrolled/10) < 1 ? 1 : 1.5-(percentScrolled/10) > 1.5 ? 1.5 : 1.5-(percentScrolled/10),
        marginTop: '-180px'
    })

    const splitLeft = useSpring({
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Arial',
        marginLeft: percentScrolled < 16 ? '0vw' : (percentScrolled-16)*3 > 10 ? '-10vw' : `-${(percentScrolled-16)*3}vw`
    })

    const splitRight = useSpring({
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Arial',
        marginLeft: percentScrolled < 16 ? '0vw' : (percentScrolled-16)*3 > 10 ? '10vw' : `${(percentScrolled-16)*3}vw`
    })
    
    const expandCircle1 = useSpring({
        height: percentScrolled < 60 ? '150px' : `${height*2.6}px`,
        width: percentScrolled < 60 ? '150px' : `${width}px`,
        marginTop: percentScrolled < 60 ? '410px' : '0px',
        borderRadius: percentScrolled < 60 ? '100%' : '0%',
        overflow: 'hidden'
    })
    
    const expandCircle2 = useSpring({
        opacity: percentScrolled < 60 ? 0 : 1
    })

    return (
        <Parallax pages={totalPages} style={{ top: '0', left: '0' }} ref={parallaxRef}>

<ParallaxLayer  style={{zIndex: 2}}>
        <IndexNavBar/>

           
            </ParallaxLayer>


            

            {/* SECTION 1 BACKGROUND */}
            <ParallaxLayer
            sticky={{start: offsetS1, end: offsetS2}}
            style={{zIndex: -1}}
            >
                <div className={styles.section1Background} />
            </ParallaxLayer>

            {/* SECTION 1 - TEXT*/}
            <ParallaxLayer
            className={styles.section1}
            
            >
                <h1 className='h1' style={{color: '#fff', marginTop: '12vh', fontFamily: 'Arial'}}>
                LOCAL POCKET
                </h1>

                <h2 className='h2' style={{color: '#fff', marginTop: '2vh'}}>
                LET'S SUPPORT<br/>LOCAL BUSINESS
                </h2>

                <h4 className='h4' style={{color: '#fff', marginTop: '2vh'}}>
                Local Pocket is a UK loyalty scheme which aims to better connect local businesses with local customers, supporting the growth of local economies, and saving customers money, time and effort. 
                      

                </h4>
            </ParallaxLayer>

            {/* SECTION 1 - IMAGES*/}
            <ParallaxLayer>
                <img
                src="/mybusiness1.png"
                alt=""
                objectFit='contain'
                className={styles.section1Image}
                />
            </ParallaxLayer>

            

            
            
            {/* SECTION 3 BACKGROUND */}
            <ParallaxLayer
            offset={offsetS3}
            
            speed={-0.25}
            style={{zIndex: '-1'}}
            >
                <div className={styles.section3Background} />
            </ParallaxLayer>

            {/* SECTION 3 - TEXT */}
            <ParallaxLayer
            offset={offsetS3+0.3}
            factor={sizeS3}
            speed={-0.3}
            className={styles.section3}
            >
                <animated.h1
                className='extraLg'
                style={splitRight}
                >
                    THREE.
                </animated.h1>
            </ParallaxLayer>
            <ParallaxLayer
            offset={offsetS3+0.42}
            factor={sizeS3}
            speed={-0.3}
            className={styles.section3}
            >
                <animated.h1
                className='extraLg'
                style={splitLeft}
                >
                    SIMPLE.
                </animated.h1>
            </ParallaxLayer>
            <ParallaxLayer
            offset={offsetS3+0.54}
            factor={sizeS3}
            speed={-0.3}
            className={styles.section3}
            >
                <animated.h1
                className='extraLg'
                style={splitRight}
                >
                    STEPS.
                </animated.h1>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS3+0.75}
            factor={sizeS3}
            speed={-0.2}
            className={styles.section3}
            >
                <h2 className='h2' style={{textAlign: 'center', color: '#fff'}}>
                    Gettings started only takes 3 simple steps!
                </h2>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS3+0.88}
            factor={sizeS3}
            speed={-0.2}
            className={styles.section3}
            >
                <h4 className='h4' style={{textAlign: 'center', color: '#fff'}}>
                    Local Pocket enables you to discover local businesses and access exclusive discounts in store for FREE.
                </h4>
            </ParallaxLayer>

            {/* SECTION 3 - 1ST SQUARE */}
            <ParallaxLayer
            offset={offsetS3+1.27}
            factor={sizeS3}
            speed={-0.2}
            >
                <div className={styles.section3Square}>
                    <img src="/graphic1.svg" height="100px" width="100px"/>

                    <h3 className='h3' style={{paddingTop: '2vh', textAlign: 'center', color: '#fff'}}>
                        Download the Local<br/>Pocket app
                    </h3>

                    <h5 className='h5' style={{marginTop: '2vh',textAlign: 'center', color: '#fff'}}>
                        Open the App store or Google Play, search for Local Pocket and download the app. Open the app and log in or create an account to get started
                    </h5>
                </div>
            </ParallaxLayer>

            {/* SECTION 3 - MIDDLE SQUARE */}
            <ParallaxLayer
            offset={offsetS3+1.82}
            factor={sizeS3}
            speed={-0.2}
            >
                <div className={styles.section3Square}>
                <img src="/graphic2.svg" height="100px" width="100px"/>

                    <h3 className='h3' style={{paddingTop: '2vh', textAlign: 'center', color: '#fff'}}>
                        Browse your local<br/>promotions
                    </h3>

                    <h5 className='h5' style={{marginTop: '2vh', textAlign: 'center', marginBottom: '2vh', color: '#fff'}}>
                        Discover businesses available near you with our map view. Alternatively search for a product or service to view your local promotions
                    </h5>
                </div>
            </ParallaxLayer>

            {/* SECTION 3 - RIGHT SQUARE */}
            <ParallaxLayer
            offset={offsetS3+2.58}
            factor={sizeS3}
            speed={-0.2}
            >
                <div className={styles.section3Square}>
                <img src="/graphic3.svg" height="100px" width="100px"/>


                    <h3 className='h3' style={{paddingTop: '2vh', textAlign: 'center', color: '#fff'}}>
                        Use your promotional<br/>QR code in store
                    </h3>

                    <h5 className='h5' style={{marginTop: '2vh', textAlign: 'center', color: '#fff'}}>
                        Scan or display the QR code at checkout in store to recieve your discount - it's that easy!
                    </h5>
                </div>
            </ParallaxLayer>

            {/* ----------- SECTION 4 - PINS -----------*/}
            <ParallaxLayer
            sticky={{start: offsetS4, end: offsetS6}}
            factor={sizeS4}
            className={styles.section4}
            >
                {/* Main pin */}
                <svg width='70vw' viewBox="0 0 967 1440" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1440L64.7767 697.5L902.223 697.5L483.5 1440Z" fill="#98DCCC"/>
                    <ellipse cx="483.5" cy="474" rx="474.5" ry="474" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.1}
            speed={0}
            className={styles.section4}
            >
                <svg height='10vw' style={{marginLeft: '-30vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.2}
            speed={0.2}
            className={styles.section4}
            >
                <svg height='15vw' style={{marginLeft: '-40vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.13}
            speed={0.3}
            className={styles.section4}
            >
                <svg height='26vw' style={{marginLeft: '-65vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.25}
            speed={0.4}
            className={styles.section4}
            >
                <svg height='16vw' style={{marginLeft: '-90vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.10}
            speed={0.95}
            className={styles.section4}
            >
                <svg height='7vw' style={{marginLeft: '-40vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.35}
            speed={0.6}
            className={styles.section4}
            >
                <svg height='23vw' style={{marginLeft: '-75vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.20}
            speed={1}
            className={styles.section4}
            >
                <svg height='18vw' style={{marginLeft: '30vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.3}
            speed={0.5}
            className={styles.section4}
            >
                <svg height='23vw' style={{marginLeft: '80vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.33}
            speed={0.25}
            className={styles.section4}
            >
                <svg height='16vw' style={{marginLeft: '74vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.47}
            speed={0.45}
            className={styles.section4}
            >
                <svg height='10vw' style={{marginLeft: '-30vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.07}
            speed={0.55}
            className={styles.section4}
            >
                <svg height='12vw' style={{marginLeft: '22vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.52}
            speed={0.65}
            className={styles.section4}
            >
                <svg height='15vw' style={{marginLeft: '-60vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.10}
            speed={0.75}
            className={styles.section4}
            >
                <svg height='5vw' style={{marginLeft: '62vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.05}
            speed={0.1}
            className={styles.section4}
            >
                <svg height='13vw' style={{marginLeft: '-75vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.51}
            speed={0.13}
            className={styles.section4}
            >
                <svg height='8vw' style={{marginLeft: '38vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.48}
            speed={0.33}
            className={styles.section4}
            >
                <svg height='10vw' style={{marginLeft: '-55vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.18}
            speed={0.2}
            className={styles.section4}
            >
                <svg height='10vw' style={{marginLeft: '90vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer
            offset={offsetS4-0.18}
            speed={0.28}
            className={styles.section4}
            >
                <svg height='14vw' style={{marginLeft: '54vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                    <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                </svg>
            </ParallaxLayer>

            {/*----------- END OF PINS -----------*/}

            {/* SECTION 5 & 6 BACKGROUND */}
            <ParallaxLayer
            sticky={{start: offsetS5, end: offsetS7}}
            factor={sizeS5+sizeS6}
            style={{display: 'flex', justifyContent: 'center', zIndex: -1}}
            >
                <animated.div style={expandCircle1}>
                    <div className={styles.gradientBackground} />
                </animated.div>
            </ParallaxLayer>

            {/* SECTION 5 - L */}
            <ParallaxLayer
            offset={offsetS5+0.4}
            factor={sizeS5}
            speed={0}
            className={styles.section5}
            style={{justifyContent: 'flex-start'}}
            >
                <animated.div className={styles.vertical} style={expandCircle2} />

                <animated.div className={styles.horizontal} style={expandCircle2} />
            </ParallaxLayer>

            {/* SECTION 5 - TEXT */}
            <ParallaxLayer
            offset={offsetS5-0.25}
            factor={sizeS5}
            speed={-0.3}
            className={styles.section5}
            style={{justifyContent: 'flex-end'}}
            >
                <animated.div className={styles.section5Text} style={expandCircle2}>
                    <h3 className='h3' style={{color: '#fff', textAlign: 'center', marginBottom: '3vh'}}>
                        Use your promotional<br/>QR code in store
                    </h3>

                    <h4 className='h4' style={{color: '#fff', textAlign: 'center', marginBottom: '5vh'}}>
                        Scan or display the QR code at checkout in store to recieve your discount - it's that easy!
                    </h4>
                </animated.div>
            </ParallaxLayer>

            {/* SECTION 5 - IMAGE */}
            <ParallaxLayer
            offset={offsetS5+0.15}
            factor={sizeS5}
            speed={-0.2}
            className={styles.section5}
            style={{justifyContent: 'end'}}
            >
                <animated.img
                src="/deal.png"
                alt="Screenshot of..."
                resize='contain'
                className={styles.section5Image}
                style={expandCircle2}
                />
            </ParallaxLayer>

            {/* SECTION 6 - IMAGE */}
            <ParallaxLayer
            offset={offsetS6+0.5}
            factor={sizeS6}
            speed={-0.2}
            className={styles.section6}
            style={{justifyContent: 'left', zIndex: 2}}
            >
                <img
                src="/map.png"
                alt="Screenshot of..."
                resize='contain'
                className={styles.section6Image}
                />
            </ParallaxLayer>

            {/* SECTION 6 - TEXT */}
            <ParallaxLayer
            offset={offsetS6+0.8}
            factor={sizeS6}
            speed={-0.4}
            className={styles.section6}
            style={{justifyContent: 'flex-start'}}
            >
                <div className={styles.section6Text}>
                    <h3 className='h3' style={{color: '#fff', textAlign: 'center', marginBottom: '3vh'}}>
                        Browse your local<br/>promotions
                    </h3>

                    <h4 className='h4' style={{color: '#fff', textAlign: 'center', marginBottom: '5vh'}}>
                        Discover businesses available near you with our map view. Alternatively search for a product or service to view your local promotions
                    </h4>
                </div>
            </ParallaxLayer>

            {/* SECTION 6 - P */}
            <ParallaxLayer
            offset={offsetS6+0.5}
            factor={sizeS6}
            speed={-0.3}
            className={styles.section6}
            style={{justifyContent: 'flex-end', paddingRight: '3vw'}}
            >
                <div className={styles.verticalP} style={{marginRight: '135px'}} />

                <div className={styles.circle}>
                    <div className={styles.innerCircle} />
                </div>
            </ParallaxLayer>

            {/* SECTION 7 - FOOTER */}
            <ParallaxLayer
            offset={offsetS7}
            factor={sizeS7}
            speed={-0.5}
            >
                <Footer />
            </ParallaxLayer>

        </Parallax>
    )
}

export default HomeMobile;
