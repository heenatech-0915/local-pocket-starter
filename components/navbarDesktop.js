import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
import { useSpring, animated } from '@react-spring/web'
// Components.
import Toggle from './toggle'
// Styling.
import styles from '../styles/navbar_desktop.module.css'

function NavBarDesktop({ showDownloadModal, setShowDownloadModal }) {
    const router = useRouter()
    const [ os, setOs] = useState("ios")
    const [ who, setWho ] = useState("customer")

    const colorChange = useSpring({
        backgroundColor: router.pathname === '/localpocket' ? '#98DCCC' : '#5A66D1',
        width: showDownloadModal ? '700px' : '600px',
        height: showDownloadModal ? '97vh' : '4vh',
        minHeight: '50px',
        borderRadius: showDownloadModal ? '20px' : '10px',
        overflowY: showDownloadModal ? 'scroll' : 'hidden'
    })

    const headerOpacity = useSpring({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        opacity: showDownloadModal ? 0 : 1
    })

    return (
        <div className={styles.container}>

            <AnimatePresence>
                {
                    showDownloadModal ?
                        <motion.button
                        className={styles.backgroundColor}
                        onClick={() => setShowDownloadModal(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        />
                    :
                        null
                }
            </AnimatePresence>
            
            <animated.ul
            className={styles.innerContainer}
            style={colorChange}
            >

                <animated.div style={headerOpacity}>

                    <Link href={showDownloadModal ? "" : router.pathname === '/mybusiness' ? 'localpocket' : 'mybusiness'}>
                        <motion.div
                        className={styles.item}
                        whileHover={{ scale: 1.1 }}
                        >
                            <h5 className='h5' style={{color: '#fff'}}>
                                {router.pathname === '/mybusiness' ? "My Local Pocket" : "My Business"}
                            </h5>
                        </motion.div>
                    </Link>

                    <motion.nav
                    onClick={showDownloadModal ? null : () => {window.location.href = `mailto:info@localpocket-app.co.uk`}}
                    className={styles.item}
                    style={{justifyContent: 'center'}}
                    whileHover={{ scale: 1.1 }}
                    >
                        <h5 className='h5' style={{color: '#fff'}}>
                            Contact Us
                        </h5>
                    </motion.nav>

                    <motion.button
                    onClick={() => showDownloadModal ? null : setShowDownloadModal(true)}
                    className={styles.item}
                    style={{alignItems: 'flex-end'}}
                    whileHover={{ scale: 1.1 }}
                    >
                        <h5 className='h5' style={{color: '#fff'}}>
                            Download
                        </h5>
                    </motion.button>
                </animated.div>

                <div style={{marginTop: '5vh', marginLeft: '3vw', marginRight: '3vw'}}>

                    <AnimatePresence>
                        {
                            showDownloadModal ?
                                <motion.div
                                style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                >
                                    <h2 className='h2' style={{color: '#fff', fontFamily: 'arial'}}>
                                        WELCOME!
                                    </h2>

                                    <motion.button
                                    onClick={() => setShowDownloadModal(false)}
                                    style={{cursor: 'pointer'}}
                                    whileHover={{ opacity: 0.6, scale: 1.02 }}
                                    whileTap={{ scale: 1.1 }}
                                    transition={{ duration: 0.1 }}
                                    >
                                        <svg height='2vh' style={{marginTop: '-2vh'}} viewBox="0 0 28 26" preserveAspectRatio="xMidYMid slice">
                                            <path d="M28 20.7981L19.594 13L28 5.20186L22.398 0L14 7.80186L5.598 0L0 5.20186L8.398 13L0 20.7981L5.598 26L14 18.1981L22.398 26L28 20.7981Z" fill="white"/>
                                        </svg>
                                    </motion.button>
                                </motion.div>
                            :
                                null
                        }  
                    </AnimatePresence>

                    <AnimatePresence>
                        {
                            showDownloadModal ?
                                <motion.div
                                style={{display: 'flex', flexDirection: 'column'}}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                >
                                    <h4 className='h4' style={{color: '#fff', marginTop: '30px'}}>
                                        Ready to create your Local Pocket? We are hard at working finish up development.
                                        <br/><br/>
                                        Be one of the first to find fantastic deals or promote your business by signing up below to be informed when we launch!
                                    </h4>

                                    <div className={styles.inputContainer}>

                                        <input
                                        className={styles.input}
                                        style={{backgroundColor: router.pathname === '/' ? '#B6DFD6' : '#C1C5E9'}}
                                        placeholder='Name'
                                        // value={email}
                                        // onChange={event => setPassword(event.target.value)}
                                        />

                                        <input
                                        className={styles.input}
                                        style={{backgroundColor: router.pathname === '/' ? '#B6DFD6' : '#C1C5E9'}}
                                        placeholder='Email'
                                        // value={email}
                                        // onChange={event => setPassword(event.target.value)}
                                        />

                                        <h4
                                        className='h4'
                                        style={{marginTop: '30px', marginBottom: '18px', color: '#fff'}}
                                        >
                                            Which OS do you use?
                                        </h4>

                                        <Toggle
                                        titleLeft="IOS"
                                        titleRight="Android"
                                        toggled={os === "ios" ? false : true}
                                        Action={() => setOs(os === "ios" ? "android" : "ios")}
                                        backgroundColor={router.pathname === '/' ? '#B6DFD6' : '#C1C5E9'}
                                        textColor={router.pathname === '/' ? '#85CEC2' : '#5D68D3'}
                                        />

                                        <h4 className='h4' style={{marginTop: '30px', marginBottom: '18px', color: '#fff'}}>
                                            Who are you?
                                        </h4>

                                        <Toggle
                                        titleLeft="Customer"
                                        titleRight="Business"
                                        toggled={who === "customer" ? false : true}
                                        Action={() => setWho(who === "customer" ? "business" : "customer")}
                                        backgroundColor={router.pathname === '/' ? '#B6DFD6' : '#C1C5E9'}
                                        textColor={router.pathname === '/' ? '#85CEC2' : '#5D68D3'}
                                        />

                                        <motion.button
                                        className={styles.button}
                                        whileHover={{ opacity: 0.6, scale: 1.02 }}
                                        whileTap={{ scale: 1.1 }}
                                        transition={{ duration: 0.1 }}
                                        >
                                            <h4 className='h4' style={{color: router.pathname === '/' ? '#85CEC2' : '#5D68D3'}}>
                                                Sign Up Now
                                            </h4>
                                        </motion.button>

                                    </div>

                                </motion.div>
                            :
                                null
                        }
                    </AnimatePresence>
                </div>
                
            </animated.ul>
        </div>
    )
}

export default NavBarDesktop;
