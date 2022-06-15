import React from 'react'
import { motion } from "framer-motion"
// Styling.
import styles from '../styles/toggle.module.css'

function Toggle({ mobile, toggled, Action, titleLeft, titleRight, backgroundColor, textColor }) {

    return (
        <div
        className={styles.tabContainer}
        style={{backgroundColor: backgroundColor, width: mobile ? '60vw' : '15vw'}}
        >

            <button
            className={styles.tab}
            style={{width: mobile ? '30vw' : '7.5vw'}}
            onClick={() => Action()}
            >
                <h4 className='h4' style={{color: toggled ? '#fff' : textColor, marginLeft: mobile ? '5vw' : '0.5vw'}}>
                    {titleLeft}
                </h4>
            </button>

            <button
            className={styles.tab}
            style={{width: mobile ? '30vw' : '7.5vw'}}
            onClick={() => Action()}
            >
                <h4 className='h4' style={{color: toggled ? textColor : '#fff', marginRight: mobile ? '5vw' : '0.5vw'}}>
                    {titleRight}
                </h4>
            </button>

            <motion.div
            className={styles.tabSlide}
            style={{width: mobile ? '28vw' : '7vw'}}
            animate={{ marginLeft: toggled ? mobile ? '29vw' : '7.5vw' : mobile ? '3vw' : '0.5vw' }}
            transition={{ type:"spring", stiffness: 35 }}
            />

        </div>
    )
}

export default Toggle;