import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { animated, useSpring } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion, AnimatePresence } from "framer-motion"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// Components.
import WindowSize from './windowsSize'
import Footer from '../components/footerDesktop'
import DownloadModal from './downloadModal';
// Styling.
import styles from '../styles/home_desktop.module.css'
import IndexNavBar from './indexNavBar'

function HomeDesktop() {
    const parallaxRef = useRef()
    const [ width, height ] = WindowSize();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // This means changing one sections offset will auto push the later sections down correctly
    const sizeS1 = 1.0
    const sizeS2 = 2.3
    const sizeS3 = 1
    const sizeS4 = 1.1
    const sizeS5 = 1.3
    const sizeS6 = 0.05

    // DONT CHANGE THESE, ONLY CHANGE ABOVE SIZES
    const offsetS1 = 0
    const offsetS2 = offsetS1+sizeS1
    const offsetS3 = offsetS2+sizeS2
    const offsetS4 = offsetS3
    const offsetS5 = offsetS4+sizeS4
    const offsetS6 = offsetS5+sizeS5
    const offsetS7 = offsetS6+sizeS6

    // Total number of 'pages' on screen.
    const totalPages = offsetS7
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
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        scale: 1.5-(percentScrolled/10) < 1 ? 1 : 1.5-(percentScrolled/10) > 1.5 ? 1.5 : 1.5-(percentScrolled/10)
    })

    const splitLeft = useSpring({
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Arial',
        marginLeft: percentScrolled < 23 ? '0vw' : (percentScrolled-23)*3 > 10 ? '-10vw' : `-${(percentScrolled-23)*3}vw`
    })

    const splitRight = useSpring({
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Arial',
        marginLeft: percentScrolled < 23 ? '0vw' : (percentScrolled-23)*3 > 10 ? '10vw' : `${(percentScrolled-23)*3}vw`
    })
    
    const expandCircle1 = useSpring({
        height: percentScrolled < 67 ? `${0.25*height}px` : `${2.6*height}px`,
        width: percentScrolled < 67 ? `${0.25*height}px` : `${width}px`,
        marginTop: percentScrolled < 67 ? '30vh' : '0vh',
        borderRadius: percentScrolled < 67 ? '100%' : '0%',
        overflow: 'hidden'
    })
    
    const expandCircle2 = useSpring({
        opacity: percentScrolled < 67 ? 0 : 1
    })

    return (

        <>
        <DownloadModal showModal={show}  handleClose={handleClose}/>
            

            <Parallax pages={totalPages} style={{ top: '0', left: '0' }} ref={parallaxRef} id='parallaxWeWant'>

                <ParallaxLayer  style={{zIndex: 2}}>
        <IndexNavBar/>
           
            </ParallaxLayer>

                
            {/* SECTION 1 BACKGROUND */}
            <ParallaxLayer
                
                className={styles.section1background}
                
                >
                <div className={styles.section1Background} />
            </ParallaxLayer>

            {/* SECTION 1 - TEXT*/}
            <ParallaxLayer
            className={styles.section1}
            speed={0.5}
            >
                <Row>
                    <Col xs={12} lg={6} md={6}>
                    <h1 className='h1' style={{color: '#fff', marginTop: '20vh', fontFamily: 'Arial', fontSize:'96px'}}>
                LOCAL POCKET
                </h1>

                <h2 className='h2' style={{color: '#fff', marginTop: '2vh', fontSize:'36px'}}>
                LET'S SUPPORT LOCAL BUSINESS
                </h2>

                <h4 className='h4' style={{color: '#fff', marginTop: '2vh', fontSize:'20px'}}>
                Local Pocket is a UK loyalty scheme which aims to better connect local businesses with local customers, supporting the growth of local economies, and saving customers money, time and effort.
                </h4>
                    </Col>
                    <Col className={styles.section1Image} xs={12} lg={6} md={6}>
                    <img
                src="/mybusiness1.png"
                alt=""
                 layout="responsive" objectFit="cover"
                
                />
                    </Col>
                    </Row>
                
            </ParallaxLayer>

            

                {/* SECTION 2 BACKGROUND */}
                
                    <div className={styles.greenTopHalfBackground} >
                    <ParallaxLayer
                offset={offsetS2+0.3}
                speed={-0.3}
                className={styles.section2}
                >
                    <animated.h1
                    className='extraLg'
                    style={splitRight}
                    >
                        THREE.
                    </animated.h1>
                </ParallaxLayer>
                <ParallaxLayer
                offset={offsetS2+0.5}
                speed={-0.3}
                className={styles.section2}
                >
                    <animated.h1
                    className='extraLg'
                    style={splitLeft}
                    >
                        SIMPLE.
                    </animated.h1>
                </ParallaxLayer>
                <ParallaxLayer
                offset={offsetS2+0.7}
                speed={-0.3}
                className={styles.section2}
                >
                    <animated.h1
                    className='extraLg'
                    style={splitRight}
                    >
                        STEPS.
                    </animated.h1>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS2+1.27}
                speed={-0.25}
                className={styles.section2}
                >
                   
                    <h2 className='h2' style={{textAlign: 'center', color: '#fff'}}>
                        Gettings started only takes 3 simple steps!
                    </h2>

                    <h4 className='h4' style={{width: '60vw', marginTop: '1vh', textAlign: 'center', color: '#fff'}}>
                        Local Pocket enables you to discover local businesses and access exclusive discounts in store for FREE.
                    </h4>
                    <br></br><br></br>
                    <Row>
                        <Col>
                        <div className={styles.section2Square}>
                        <img src="/graphic1.svg" height="100px" width="100px"/>
                            <h3 className='h3' style={{paddingTop: '2vh', textAlign: 'center', color: '#fff'}}>
                                Download the Local<br/>Pocket app
                            </h3>

                            <h4 className='h5' style={{marginTop: '3vh',textAlign: 'center', color: '#fff'}}>
                                Open the App store or Google Play, search for Local Pocket and download the app. Open the app and log in or create an account to get started
                            </h4>
                        </div>
                        </Col>
                        <Col>
                        <div className={styles.section2Square}>
                        <img src="/graphic2.svg" height="100px" width="100px"/>
                            <h3 className='h3' style={{paddingTop: '2vh', textAlign: 'center', color: '#fff'}}>
                                Browse your local<br/>promotions
                            </h3>

                            <h4 className='h5' style={{marginTop: '3vh', textAlign: 'center', color: '#fff'}}>
                                Discover businesses available near you with our map view. Alternatively search for a product or service to view your local promotions
                            </h4>
                        </div>

                        </Col>
                        <Col>
                        <div className={styles.section2Square}>
                        <img src="/graphic3.svg" height="100px" width="100px"/>

                            <h3 className='h3' style={{paddingTop: '2vh', textAlign: 'center', color: '#fff'}}>
                                Use your promotional<br/>QR code in store
                            </h3>

                            <h4 className='h5' style={{marginTop: '3vh',textAlign: 'center', color: '#fff'}}>
                                Scan or display the QR code at checkout in store to recieve your discount - it's that easy!
                            </h4>
                        </div>

                        </Col>
                        </Row>
                   
                </ParallaxLayer>

                        </div>
               

                {/* SECTION 2 - TEXT */}
               
                {/* SECTION 2 - LEFT SQUARE */}
                
                

                {/* ----------- SECTION 4 - PINS -----------*/}
                <ParallaxLayer
                sticky={{start: offsetS4, end: offsetS5}}
                className={styles.section3}
                >
                    {/* Main pin */}
                    <svg height='80vh' viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1451L64.7767 708.5L902.223 708.5L483.5 1451Z" fill="#57968B"/>
                        <circle cx="483.5" cy="479.5" r="479.5" fill="#57968B"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.1}
                speed={0}
                className={styles.section3}
                >
                    <svg height='10vh' style={{marginLeft: '-30vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#ffffff"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#57968B"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.1}
                speed={0.15}
                className={styles.section3}
                >
                    <svg height='12vh' style={{marginLeft: '-50vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.2}
                speed={0.2}
                className={styles.section3}
                >
                    <svg height='15vh' style={{marginLeft: '-40vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.13}
                speed={0.3}
                className={styles.section3}
                >
                    <svg height='26vh' style={{marginLeft: '-65vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.25}
                speed={0.4}
                className={styles.section3}
                >
                    <svg height='16vh' style={{marginLeft: '-90vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.10}
                speed={0.95}
                className={styles.section3}
                >
                    <svg height='7vh' style={{marginLeft: '-40vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.35}
                speed={0.6}
                className={styles.section3}
                >
                    <svg height='23vh' style={{marginLeft: '-75vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.36}
                speed={0.7}
                className={styles.section3}
                >
                    <svg height='30vh' style={{marginLeft: '55vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.20}
                speed={1}
                className={styles.section3}
                >
                    <svg height='18vh' style={{marginLeft: '30vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.16}
                speed={0.5}
                className={styles.section3}
                >
                    <svg height='23vh' style={{marginLeft: '89vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.12}
                speed={0.15}
                className={styles.section3}
                >
                    <svg height='17vh' style={{marginLeft: '50vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.33}
                speed={0.25}
                className={styles.section3}
                >
                    <svg height='16vh' style={{marginLeft: '74vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.05}
                speed={0.35}
                className={styles.section3}
                >
                    <svg height='14vh' style={{marginLeft: '-81vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.47}
                speed={0.45}
                className={styles.section3}
                >
                    <svg height='10vh' style={{marginLeft: '-30vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.07}
                speed={0.55}
                className={styles.section3}
                >
                    <svg height='12vh' style={{marginLeft: '22vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.52}
                speed={0.65}
                className={styles.section3}
                >
                    <svg height='15vh' style={{marginLeft: '-60vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.10}
                speed={0.75}
                className={styles.section3}
                >
                    <svg height='10vh' style={{marginLeft: '62vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.05}
                speed={0.1}
                className={styles.section3}
                >
                    <svg height='13vh' style={{marginLeft: '-75vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.49}
                speed={0.95}
                className={styles.section3}
                >
                    <svg height='10vh' style={{marginLeft: '90vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.41}
                speed={0.13}
                className={styles.section3}
                >
                    <svg height='8vh' style={{marginLeft: '38vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.48}
                speed={0.33}
                className={styles.section3}
                >
                    <svg height='10vh' style={{marginLeft: '-55vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.18}
                speed={0.2}
                className={styles.section3}
                >
                    <svg height='10vh' style={{marginLeft: '90vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0}
                speed={0.34}
                className={styles.section3}
                >
                    <svg height='21vh' style={{marginLeft: '70vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                <ParallaxLayer
                offset={offsetS3-0.18}
                speed={0.28}
                className={styles.section3}
                >
                    <svg height='14vh' style={{marginLeft: '54vw'}} viewBox="0 0 967 1447" preserveAspectRatio="xMidYMid slice">
                        <path d="M483.5 1469L64.7767 726.5L902.223 726.5L483.5 1469Z" fill="#98DCCC"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M483.5 967C750.53 967 967 750.53 967 483.5C967 216.47 750.53 0 483.5 0C216.47 0 0 216.47 0 483.5C0 750.53 216.47 967 483.5 967ZM487.5 625C587.74 625 669 543.74 669 443.5C669 343.26 587.74 262 487.5 262C387.26 262 306 343.26 306 443.5C306 543.74 387.26 625 487.5 625Z" fill="#98DCCC"/>
                    </svg>
                </ParallaxLayer>

                {/*----------- END OF PINS -----------*/}

                {/* SECTION 4 & 5 BACKGROUND */}
                <ParallaxLayer
                sticky={{start: offsetS4, end: offsetS6}}
                style={{display: 'flex', justifyContent: 'center', zIndex: -1}}
                >
                    <animated.div style={expandCircle1}>
                        <div className={styles.gradientBackground} />
                    </animated.div>
                </ParallaxLayer>

                {/* SECTION 4 - L */}
                <ParallaxLayer
                offset={offsetS4+0.3}
                factor={sizeS4}
                className={styles.section4}
                style={{display: 'flex', justifyContent: 'center'}}
                >
                    
                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', width: '1500px', maxWidth: '1500px' }}>

                        <animated.div className={styles.vertical} style={expandCircle2} />

                        <animated.div className={styles.horizontal} style={expandCircle2} />

                    </div>

                </ParallaxLayer>

                {/* SECTION 4 - IMAGE */}
                <ParallaxLayer
                offset={offsetS4+0.3}
                factor={sizeS4}
                speed={0.15}
                className={styles.section4}
                style={{display: 'flex', justifyContent: 'center'}}
                >
                    
                    <div style={{ display: 'flex', justifyContent: 'center', width: '1500px', maxWidth: '1500px' }}>

                        <animated.img
                        src="/deal.png"
                        alt="Screenshot of..."
                        resize='contain'
                        className={styles.section4Image}
                        style={expandCircle2}
                        />

                    </div>

                </ParallaxLayer>

                {/* SECTION 4 - TEXT */}
                <ParallaxLayer
                offset={offsetS4-0.6}
                factor={sizeS4}
                speed={-0.3}
                className={styles.section4}
                style={{display: 'flex', justifyContent: 'center'}}
                >
                    
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '1500px', maxWidth: '1500px' }}>

                        <animated.div className={styles.section4Text} style={expandCircle2}>
                            <h3 className='h3' style={{color: '#fff', textAlign: 'center', marginBottom: '3vh'}}>
                                Use your promotional QR code in store
                            </h3>

                            <h4 className='h5' style={{color: '#fff', textAlign: 'center', marginBottom: '5vh'}}>
                                Scan or display the QR code at checkout in store to recieve your discount - it's that easy!
                            </h4>

                            <motion.button
                            onClick={() => setShow(true)}
                            className={styles.signUp}
                            whileHover={{ opacity: 0.6, scale: 1.02 }}
                            whileTap={{ scale: 1.1 }}
                            transition={{ duration: 0.1 }}
                            >
                                <h4 className='h4' style={{color: '#98DCCC'}}>
                                    Download
                                </h4>
                            </motion.button>
                        </animated.div>

                    </div>

                </ParallaxLayer>

                {/* SECTION 5 - TEXT */}
                <ParallaxLayer
                offset={offsetS5}
                factor={sizeS5}
                speed={-0.3}
                className={styles.section5}
                style={{display: 'flex', justifyContent: 'center', zIndex: 3}}
                >
                    
                    <div style={{ display: 'flex', justifyContent: 'flex-start', width: '1500px', maxWidth: '1500px' }}>

                        
                        <div className={styles.section5Text}>
                            <h3 className='h3' style={{color: '#fff', textAlign: 'center', marginBottom: '3vh'}}>
                                Browse your local promotions
                            </h3>

                            <h4 className='h5' style={{color: '#fff', textAlign: 'center', marginBottom: '5vh'}}>
                                Discover businesses available near you with our map view. Alternatively search for a product or service to view your local promotions
                            </h4>
                            <motion.button
                            onClick={() => setShow(true)}
                            className={styles.signUp}
                            whileHover={{ opacity: 0.6, scale: 1.02 }}
                            whileTap={{ scale: 1.1 }}
                            transition={{ duration: 0.1 }}
                            >
                                <h5 className='h5' style={{color: '#84CDC1'}}>
                                    Download
                                </h5>
                            </motion.button>
                        </div>

                    </div>

                </ParallaxLayer>

                {/* SECTION 5 - P */}
                <ParallaxLayer
                offset={offsetS5}
                factor={sizeS5}
                className={styles.section5}
                style={{display: 'flex', justifyContent: 'center'}}
                >
                    
                    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '1500px', maxWidth: '1500px' }}>

                        
                        <div className={styles.vertical} />

                        <div className={styles.circle}>
                            <div className={styles.innerCircle} />
                        </div>

                    </div>

                </ParallaxLayer>

                {/* SECTION 5 - IMAGE */}
                <ParallaxLayer
                offset={offsetS5+0.15}
                factor={sizeS5}
                speed={0.3}
                className={styles.section5}
                style={{display: 'flex', justifyContent: 'center', zIndex: 2}}
                >
                    
                    <div style={{ display: 'flex', justifyContent: 'center', width: '1500px', maxWidth: '1500px' }}>

                        
                        <img
                        src="/map.png"
                        alt="Screenshot of..."
                        resize='contain'
                        className={styles.section5Image}
                        />

                    </div>

                </ParallaxLayer>

                {/* SECTION 7 - FOOTER */}
                <ParallaxLayer
                offset={offsetS6}
                factor={sizeS6}
                style={{display: 'flex', alignItems: 'flex-end', zIndex: 3}}
                >
                    <Footer />
                </ParallaxLayer>

            </Parallax>
        </>

    )
}

export default HomeDesktop;
