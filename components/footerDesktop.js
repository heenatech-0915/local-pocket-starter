import { motion } from "framer-motion"
import Link from 'next/link'
// Styling.
import styles from '../styles/footer_desktop.module.css'

function Footer() {

    return (
        <ul className={styles.container}>

            <h5 className='h5' style={{color: '#fff', marginRight: '2.5vw'}}>
                2022 Local Pocket Ltd
            </h5>

            <Link href='/privacypolicy'>
                <motion.button
                className={styles.item}
                whileHover={{ opacity: 0.6, scale: 1.02 }}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                > 
                    <h5 className='h5' style={{color: '#fff'}}>
                        Privacy Policy
                    </h5>
                </motion.button>
            </Link>

            <Link href='/termsandconditions'>
                <motion.button
                className={styles.item}
                whileHover={{ opacity: 0.6, scale: 1.02 }}
                whileTap={{ scale: 1.1 }}
                transition={{ duration: 0.1 }}
                >
                    <h5 className='h5' style={{color: '#fff'}}>
                        Terms and Conditions
                    </h5>
                </motion.button>
            </Link>

            <motion.button
            onClick={() => {window.location.href = `mailto:info@localpocket-app.co.uk`}}
            className={styles.item}
            whileHover={{ opacity: 0.6, scale: 1.02 }}
            whileTap={{ scale: 1.1 }}
            transition={{ duration: 0.1 }}
            >
                <h5 className='h5' style={{color: '#fff'}}>
                    info@localpocket-app.co.uk
                </h5>
            </motion.button>
            
        </ul>
    )
}

export default Footer;
