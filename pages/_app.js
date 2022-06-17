import React, { useState } from 'react'
import Head from "next/head"
import '../styles/globals.css'
// Components.
import NavbarDesktop from '../components/navbarDesktop'
import NavbarMobile from '../components/navbarMobile'
import HoverDownload from '../components/hoverDownload'
import WindowSize from '../components/windowsSize'
import Breakpoints from '../components/breakpoints'
import IndexDesktop from '../components/indexDesktop'
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexNavBar from '../components/indexNavBar';
function MyApp({ Component, pageProps }) {
    const [ width, height ] = WindowSize()

    const [ showDownloadModal, setShowDownloadModal ] = useState(false)

    

    return (

        <>
            <Head>
                {/* Change color of browser for - Chrome, Firefox OS and Opera */}
                <meta name="theme-color" content="#95ddcd" key="coloring1" />
                {/* Change color of browser for - Windows Phone */}
                <meta name="msapplication-navbutton-color" content="#95ddcd" key="coloring2" />
                {/* Change color of browser for - iOS Safari */}
                <meta name="apple-mobile-web-app-status-bar-style" content="#95ddcd" key="coloring3" />
                {/* Description of the site */}
                <meta name="description" content="Local Pocket is a UK loyalty scheme which aims to better connect local businesses with local customers." />
            </Head>

           
            <Component {...pageProps}  />

            
        </>
    )
}

export default MyApp