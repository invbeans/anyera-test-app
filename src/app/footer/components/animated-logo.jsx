"use client"

import { motion, useInView } from "framer-motion"
import styles from './footer.module.css'
import { useRef } from "react"

export default function AnimatedLogo({viewBox, d}) {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(0, 0, 0, 1)"
        }
    }

    return (
        <div className={styles.container} ref={ref}>
            {isInView && <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={viewBox}
                className={styles.item}
            >
                <motion.path
                    d={d}
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    strokeDasharray="0 1"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                />
            </motion.svg>}
        </div>
    )
}