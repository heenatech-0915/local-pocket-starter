import React from 'react'
import Head from 'next/head'
import { motion } from "framer-motion"
// Components.
import HomeDesktop from '../components/homeDesktop'
import HomeMobile from '../components/homeMobile'
import WindowSize from '../components/windowsSize'
import Breakpoints from '../components/breakpoints'
import NavbarDesktop from '../components/navbarDesktop'
import NavbarMobile from '../components/navbarMobile'
// Styling.
import TransitionAnimation from '../components/transitionAnimation'

function LocalPocket({ setShowDownloadModal, showDownloadModal }) {
    const [ width, height ] = WindowSize()
    
    return (
        <>
            <Head>
                <title>Local Pocket</title>
                <meta name="theme-color" content="#95ddcd" key="coloring1" />
            </Head>

            <body>
            { width > Breakpoints.mobile ? <NavbarDesktop showDownloadModal={showDownloadModal} setShowDownloadModal={setShowDownloadModal} /> : <NavbarMobile showDownloadModal={showDownloadModal} setShowDownloadModal={setShowDownloadModal} /> }

                <motion.div
                variants={TransitionAnimation}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: 'linear', duration: 1 }}
                >

                    { width > Breakpoints.mobile ? <HomeDesktop setShowDownloadModal={setShowDownloadModal} /> : <HomeMobile setShowDownloadModal={setShowDownloadModal} /> }

                </motion.div>
            </body>
        </>
    )
}

export default LocalPocket;
