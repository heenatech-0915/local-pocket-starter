import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
import { useSpring, animated } from '@react-spring/web'
// Components.
import WindowSize from './windowsSize'
import Toggle from './toggle'
// Styling.
import styles from '../styles/hoverdownload.module.css'

function HoverDownload({ showDownloadModal, setShowDownloadModal }) {
    const router = useRouter()
    const [ width, height ] = WindowSize()

    const [ os, setOs] = useState("ios")
    const [ who, setWho ] = useState("customer")

    const containerChange = useSpring({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: showDownloadModal ? '8vh' : '0vh',
        paddingBottom: '5vh',
        paddingLeft: showDownloadModal ? '8vw' : '0vw',
        paddingRight: showDownloadModal ? '8vw' : '0vw',
        width: showDownloadModal ? `${width*0.85}px` : '130px',
        height: showDownloadModal ? `${height*0.85}px` : '40px',
        borderRadius: showDownloadModal ? '30px' : '10px',
        overflowY: showDownloadModal ? 'scroll' : 'hidden'
    })

    return (
        <>
            {/* Background black fade */}
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
            
            {/* Expanding modal */}
            <animated.div
            className={styles.button}
            style={containerChange}
            >
                <AnimatePresence>
                    {
                        showDownloadModal ?
                            <motion.div
                            style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            >
                                <h1 className='h1' style={{color: router.pathname === '/' ? '#84CDC1' : '#5C68D2', fontFamily: 'arial'}}>
                                    WELCOME!
                                </h1>

                                <motion.button
                                onClick={() => setShowDownloadModal(false)}
                                style={{cursor: 'pointer'}}
                                whileHover={{ opacity: 0.6, scale: 1.02 }}
                                whileTap={{ scale: 1.1 }}
                                transition={{ duration: 0.1 }}
                                >
                                    <svg height='2vh' style={{marginTop: '-3.5vh'}} viewBox="0 0 28 26" preserveAspectRatio="xMidYMid slice">
                                        <path d="M28 20.7981L19.594 13L28 5.20186L22.398 0L14 7.80186L5.598 0L0 5.20186L8.398 13L0 20.7981L5.598 26L14 18.1981L22.398 26L28 20.7981Z" fill={router.pathname === '/' ? '#84CDC1' : '#5C68D2'} />
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
                                <h3 className='h3' style={{color: router.pathname === '/' ? '#B6DFD6' : '#C1C5E9', marginTop: '30px'}}>
                                    Ready to create your Local Pocket? We are hard at working finish up development.
                                    <br/><br/>
                                    Be one of the first to find fantastic deals or promote your business by signing up below to be informed when we launch!
                                </h3>

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
                                    style={{marginTop: '25px', marginBottom: '8px', color: router.pathname === '/' ? '#B6DFD6' : '#C1C5E9'}}
                                    >
                                        Which OS do you use?
                                    </h4>

                                    <Toggle
                                    mobile={true}
                                    titleLeft="IOS"
                                    titleRight="Android"
                                    toggled={os === "ios" ? false : true}
                                    Action={() => setOs(os === "ios" ? "android" : "ios")}
                                    backgroundColor={router.pathname === '/' ? '#B6DFD6' : '#C1C5E9'}
                                    textColor={router.pathname === '/' ? '#85CEC2' : '#5D68D3'}
                                    />

                                    <h4 className='h4' style={{marginTop: '25px', marginBottom: '8px', color: router.pathname === '/' ? '#B6DFD6' : '#C1C5E9'}}>
                                        Who are you?
                                    </h4>

                                    <Toggle
                                    mobile={true}
                                    titleLeft="Customer"
                                    titleRight="Business"
                                    toggled={who === "customer" ? false : true}
                                    Action={() => setWho(who === "customer" ? "business" : "customer")}
                                    backgroundColor={router.pathname === '/' ? '#B6DFD6' : '#C1C5E9'}
                                    textColor={router.pathname === '/' ? '#85CEC2' : '#5D68D3'}
                                    />

                                    <motion.button
                                    className={styles.button2}
                                    style={{backgroundColor: router.pathname === '/' ? '#85CEC2' : '#5D68D3'}}
                                    whileHover={{ opacity: 0.6, scale: 1.02 }}
                                    whileTap={{ scale: 1.1 }}
                                    transition={{ duration: 0.1 }}
                                    >
                                        <h4 className='h4' style={{color: '#fff'}}>
                                            Sign Up Now
                                        </h4>
                                    </motion.button>

                                </div>

                            </motion.div>
                        :
                            null
                    }
                </AnimatePresence>
            </animated.div>

            {/* Sign up button - disappears when modal opens */}
            <AnimatePresence>
                {
                    showDownloadModal ?
                        null
                    :
                        <motion.button
                        className={styles.button}
                        onClick={() => setShowDownloadModal(true)}
                        whileTap={{ scale: 1.1 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        >
                            <h4 className='h4' style={{color: '#84CDC1'}}>
                                Download
                            </h4>
                        </motion.button>
                }
            </AnimatePresence>
        </>
    )
}

export default HoverDownload;
