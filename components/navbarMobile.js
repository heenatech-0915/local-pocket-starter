import Link from 'next/link'
import {useRouter} from 'next/router'
import { motion, AnimatePresence } from "framer-motion"
import { useSpring, animated } from '@react-spring/web'
// Styling.
import styles from '../styles/navbar_mobile.module.css'

function NavBarMobile({ showDownloadModal }) {
    const router = useRouter()

    return (
        <div className={styles.container}>

            <AnimatePresence>
                {
                    showDownloadModal ?
                        null
                    :
                        <div className={styles.inner}>
                            <Link href={router.pathname === '/mybusiness' ? 'localpocket' : 'mybusiness'}>
                                <motion.button
                                className={styles.button}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                whileTap={{ scale: 1.1 }}
                                >
                                    <h4
                                    className='h4'
                                    style={{color: router.pathname === '/mybusiness' ? '#8CD1C5' : '#5C68D2'}}
                                    >
                                        {router.pathname === '/mybusiness' ? "My Local Pocket" : "My Business"}
                                    </h4>
                                </motion.button>
                            </Link>
                            
                            <motion.button
                            onClick={() => {window.location.href = `mailto:info@localpocket-app.co.uk`}}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            whileTap={{ scale: 1.1 }}
                            >
                                <svg height='40px' viewBox="0 0 40 40" preserveAspectRatio="xMidYMid slice">
                                    <path d="M20 0C8.94602 0 0 8.945 0 20C0 31.0538 8.945 40 20 40C31.054 40 40 31.055 40 20C40 8.94617 31.055 0 20 0ZM22.0538 27.9391C22.0538 28.571 21.1324 29.2027 20.0004 29.2027C18.8157 29.2027 17.9734 28.571 17.9734 27.9391V17.9089C17.9734 17.1718 18.8158 16.6715 20.0004 16.6715C21.1324 16.6715 22.0538 17.1718 22.0538 17.9089V27.9391ZM20.0005 14.2497C18.7895 14.2497 17.8418 13.3546 17.8418 12.3541C17.8418 11.3537 18.7895 10.485 20.0005 10.485C21.1852 10.485 22.133 11.3537 22.133 12.3541C22.133 13.3546 21.1851 14.2497 20.0005 14.2497Z" fill="white"/>
                                </svg>
                            </motion.button>
                        </div>
                }
            </AnimatePresence>
                
        </div>
    )
}

export default NavBarMobile;
