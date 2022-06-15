import React from 'react'
import Head from 'next/head'
import { motion } from "framer-motion"
// Components.
import MyBusinessDesktop from '../components/myBusinessDesktop'
import MyBusinessMobile from '../components/myBusinessMobile'
import WindowSize from '../components/windowsSize'
import Breakpoints from '../components/breakpoints'
import NavbarDesktop from '../components/navbarDesktop'
import NavbarMobile from '../components/navbarMobile'
// Styling.
import TransitionAnimation from '../components/transitionAnimation'

function MyBusiness({ setShowDownloadModal ,showDownloadModal}) {
    const [ width, height ] = WindowSize()
    


    return (
        <>
            <Head>
                <title>My Business</title>
                <meta name="theme-color" content="#5C68D2" key="coloring1" />
            </Head>
            { width > Breakpoints.mobile ? <NavbarDesktop showDownloadModal={showDownloadModal} setShowDownloadModal={setShowDownloadModal} /> : <NavbarMobile showDownloadModal={showDownloadModal} setShowDownloadModal={setShowDownloadModal} /> }


            <motion.div
            variants={TransitionAnimation}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear', duration: 1 }}
            >
                    { width > Breakpoints.mobile ? <MyBusinessDesktop setShowDownloadModal={setShowDownloadModal} /> : <MyBusinessMobile setShowDownloadModal={setShowDownloadModal} /> }
            </motion.div>
        </>        
    )
}

export default MyBusiness;
