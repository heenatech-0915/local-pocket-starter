import React from 'react'
import Head from 'next/head'
import { motion } from "framer-motion"
// Styling.
import styles from '../styles/termsandconditions.module.css'
import TransitionAnimation from '../components/transitionAnimation'

function TermsandConditions({ setOpen, open }) {

    return (
        <>
            <Head>
                <title>Terms and Conditions</title>
            </Head>
            
            <motion.main
            variants={TransitionAnimation}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: 'linear', duration: 1 }}
            >

                <h1 className='h1'>
                    Terms and Conditions
                </h1>

                <p className='p'>
                    Lots of text here
                </p>

            </motion.main>
        </>
    )
}

export default TermsandConditions;
