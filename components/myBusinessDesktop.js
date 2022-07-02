import React, { useState, useEffect, useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion } from "framer-motion"
import { useRouter } from 'next/router'
// Components.
import Footer from '../components/footerDesktop'
// Styling.
import styles from '../styles/mybusiness_desktop.module.css'
import IndexNavBar from './indexNavBar'
import DownloadModal from './downloadModal';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyBusinessDesktop() {
    const parallaxRef = useRef();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // This means changing one sections offset will auto push the later sections down correctly,
    // making factor (size) changes easier to manage.
    const sizeS1 = 1
    const sizeS2 = 1.3
    const sizeS3 = 1.3
    const sizeS4 = 0.05

    // DONT CHANGE THESE, ONLY CHANGE ABOVE SIZES
    const offsetS1 = 0
    const offsetS2 = offsetS1+sizeS1
    const offsetS3 = offsetS2+sizeS2
    const offsetS4 = offsetS3+sizeS3
    const offsetS5 = offsetS4+sizeS4

    // Total number of 'pages' on screen.
    const totalPages = offsetS5
    // Total scrolled so far.
    const [ scroll, setScroll ] = useState(0)
    // Full height of the entire parallax page
    const [ fullHeight, setFullHeight ] = useState(6050)
    // Height in pixels of single page
    const pixelSinglePage = fullHeight/totalPages
    // Get % scrolled down the entire parallax page. Scroll counts from top of screen so doesnt count final screen, so to compensate work out single page height and minus that from total height of the page.
    const percentScrolled = (scroll/(fullHeight-(fullHeight/totalPages)))*100
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

    return (
        <>
        
        <DownloadModal showModal={show}  handleClose={handleClose}/>
        <Parallax className={styles.section1bg} pages={totalPages} style={{ top:0,  left: '0'}} ref={parallaxRef}>
           
        <ParallaxLayer  style={{zIndex: 2}}>
        <IndexNavBar/>
           
            </ParallaxLayer>
       

            {/* SECTION 1 BACKGROUND */}
            <ParallaxLayer
            style={{zIndex: -1}}
            >
                <div className={styles.section1Background} />
            </ParallaxLayer>

            {/* SECTION 1 - TEXT*/}
            <ParallaxLayer
            className={styles.section1}
            
            >
                <Row>
                    <Col xs={12}  lg={6} md={6} sm={6}>
                    <h1 className='h1' style={{color: '#fff', marginTop: '20vh', fontFamily: 'Arial', fontSize:'96px'}}>
                    WELCOME.
                </h1>

                <h2 className='h2' style={{color: '#fff', marginTop: '2vh', fontSize:'36px'}}>
                    To your beautiful new digital presence
                </h2>

                <h4 className='h4' style={{color: '#fff', marginTop: '2vh', fontSize:'20px'}}>
                    Local Pocket helps ambitious businesses attract new and returning customers. Poviding powerful, flexible, easy to use systems for creating unique loyalty programs alonside your beautiful new digital presence with just your phone!
                </h4>
                    </Col>
                    <Col className={styles.section1Image} xs={12} lg={6} md={6} sm={6}>
                    <img
                src="/mybusiness1.png"
                alt=""
                objectFit='contain'
                
                />
                    </Col>
                    </Row>
                
            </ParallaxLayer>

            

            {/* SECTION 2 & 3 BACKGROUND */}
            <ParallaxLayer
            sticky={{start: offsetS2, end: offsetS4}}
            factor={sizeS2+sizeS3}
            style={{display: 'flex', justifyContent: 'center', zIndex: -1}}
            >
                <div className={styles.gradientBackground} />
            </ParallaxLayer>

            {/* SECTION 2 - L */}
            <ParallaxLayer
            offset={offsetS2+0.3}
            factor={sizeS2}
            className={styles.section2}
            style={{display: 'flex', justifyContent: 'center'}}
            >
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', width: '1500px', maxWidth: '1500px' }}>

                    <div className={styles.vertical} />

                    <div className={styles.horizontal} />

                </div>
            </ParallaxLayer>

            {/* SECTION 2 - IMAGE */}
            <ParallaxLayer
            offset={offsetS2}
            factor={sizeS2}
            speed={0.15}
            className={styles.section2}
            style={{display: 'flex', justifyContent: 'center'}}
            >
                <div style={{ display: 'flex', justifyContent: 'center', width: '1500px', maxWidth: '1500px' }}>

                    <img
                    src="/promotion.png"
                    alt="Screenshot of..."
                    resize='contain'
                    className={styles.section2Image}
                    />

                </div>
            </ParallaxLayer>

            {/* SECTION 2 - TEXT */}
            <ParallaxLayer
            offset={offsetS2-0.6}
            factor={sizeS2}
            speed={-0.3}
            className={styles.section2}
            style={{display: 'flex', justifyContent: 'center'}}
            >
        
                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '1500px', maxWidth: '1500px' }}>
                    
                    <div className={styles.section2Text}>
                        <h3 className='h3' style={{color: '#fff', textAlign: 'center', marginBottom: '3vh'}}>
                            Get Promoted
                        </h3>

                        <h5 className='h5' style={{color: '#fff', textAlign: 'center', marginBottom: '5vh'}}>
                            Get noticed! Our promotional tools ensure your business stands out from the crowd
                            <br/>
                            Take advantage of our 'deal of the day' promotion feature or get in touch to find out how you can be featured on the promotions page. Don't leave anything to chance
                        </h5>

                        <motion.button
                        onClick={() => setShow(true)}
                        className={styles.signUp}
                        whileHover={{ opacity: 0.6, scale: 1.02 }}
                        whileTap={{ scale: 1.1 }}
                        transition={{ duration: 0.1 }}
                        >
                            <h5 className='h5' style={{color: '#5A66D1'}}>
                                Download
                            </h5>
                        </motion.button>
                    </div>

                </div>
            </ParallaxLayer>

            {/* SECTION 3 - TEXT */}
            <ParallaxLayer
            offset={offsetS3+0.1}
            factor={sizeS3}
            speed={-0.4}
            className={styles.section3}
            style={{display: 'flex', justifyContent: 'center', zIndex: 3}}
            >
        
                <div style={{ display: 'flex', justifyContent: 'flex-start', width: '1500px', maxWidth: '1500px' }}>
                    
                    <div className={styles.section3Text}>
                        <h3 className='h3' style={{color: '#fff', textAlign: 'center', marginBottom: '3vh'}}>
                            Understand Your Customers
                        </h3>

                        <h5 className='h5' style={{color: '#fff', textAlign: 'center', marginBottom: '5vh'}}>
                            Make data driven decisions for your business with our analytics to learn who your customers are and what they want
                            <br/>
                            Monitor your performance and build your brand without the guess work
                        </h5>

                            <motion.button
                            onClick={() => setShow(true)}
                            className={styles.signUp}
                            whileHover={{ opacity: 0.6, scale: 1.02 }}
                            whileTap={{ scale: 1.1 }}
                            transition={{ duration: 0.1 }}
                            >
                                <h5 className='h5' style={{color: '#5A66D1'}}>
                                    Download
                                </h5>
                            </motion.button>
                    </div>
                    
                </div>
            </ParallaxLayer>

            {/* SECTION 3 - P */}
            <ParallaxLayer
            offset={offsetS3}
            factor={sizeS3}
            className={styles.section3}
            style={{display: 'flex', justifyContent: 'center'}}
            >

                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '1500px', maxWidth: '1500px' }}>
                    
                    <div className={styles.verticalP} />

                    <div className={styles.circle}>
                        <div className={styles.innerCircle} />
                    </div>
                    
                </div>
            </ParallaxLayer>

            {/* SECTION 3 - IMAGE */}
            <ParallaxLayer
            offset={offsetS3+0.15}
            factor={sizeS3}
            speed={0.3}
            className={styles.section3}
            style={{display: 'flex', justifyContent: 'center', zIndex: 2}}
            >
        
                <div style={{ display: 'flex', justifyContent: 'center', width: '1500px', maxWidth: '1500px' }}>
                    
                    <img
                    src="/account.png"
                    alt="Screenshot of..."
                    resize='contain'
                    className={styles.section3Image}
                    />

                </div>
            </ParallaxLayer>

            {/* SECTION 4 - FOOTER */}
            <ParallaxLayer
            offset={offsetS4}
            factor={sizeS4}
            style={{display: 'flex', alignItems: 'flex-end', zIndex: 3}}
            >
                <Footer />
            </ParallaxLayer>

        </Parallax>
        </>
    )
}

export default MyBusinessDesktop;