"use client"

import styles from './footer.module.css'
import { motion, useInView } from "framer-motion";
import { useRef } from "react"

export default function LogoFooter({ isLogoAnimated }) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const logo = {
        hidden: (isLogoAnimated) ? {
            opacity: 0,
            scale: 0.8
        } : {
            opacity: 1,
            scale: 1
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    }

    return (
        <div ref={ref}>
            {isLogoAnimated && isInView && <motion.div
                className={styles["footer-col"]}
                variants={logo}
                initial="hidden"
                animate="visible"
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.6, 0.81, 0.3, 0.9]
                }}
            >
                <div className={styles["logo-footer"]} ref={ref}>
                    <img src='/driverave.svg' alt='logo'></img>
                </div>
                <p className={styles.p}>Аренда жилья и автомобилей от владельцев</p>
            </motion.div>}

            {!isLogoAnimated &&
                <div className={styles["footer-col"]}>
                    <div className={styles["logo-footer"]} ref={ref}>
                        <img src='/driverave.svg' alt='logo'></img>
                    </div>
                    <p className={styles.p}>Аренда жилья и автомобилей от владельцев</p>
                </div>}
        </div>
    )
}