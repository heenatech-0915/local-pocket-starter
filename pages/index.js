import React from 'react'
import Head from 'next/head'
import { motion } from "framer-motion"
// Components.
import IndexDesktop from '../components/indexDesktop'
import IndexMobile from '../components/indexDesktop'
import HomeDesktop from '../components/homeDesktop'
import HomeMobile from '../components/homeMobile'
import WindowSize from '../components/windowsSize'
import Breakpoints from '../components/breakpoints'
// Styling.
import TransitionAnimation from '../components/transitionAnimation'

function Index() {
    const [ width, height ] = WindowSize()
    
    return (
        <>
            <Head>
                <title>Local Pocket</title>
            </Head>

            
               <body>
               
                 <motion.div
                variants={TransitionAnimation}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: 'linear', duration: 1 }}
                >

                    {
                        
                    width > Breakpoints.mobile ? <IndexDesktop    /> : <IndexMobile  />}
                      

                </motion.div> 

                </body>
            
        </>
    )
}

export default Index;
