"use client"

import { motion } from "framer-motion"
import styles from './footer.module.css'

export default function AnimatedExample() {
    const icon = {
        hidden: {
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    }

    return (
        <div className={styles.container}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className={styles.item}
            >
                <motion.path
                    d="M28.4202 2.54842L24.1948 26.3099C23.8757 27.9866 23.0446 28.404 21.8635 27.6145L15.4248 21.9571L12.3185 25.5204C11.9745 25.9306 11.6874 26.2729 11.0244 26.2729L11.4874 18.4546L23.4197 5.59775C23.9387 5.0468 23.3067 4.74032 22.6136 5.29246L7.86202 16.3688L1.51134 13.998C0.130198 13.484 0.105196 12.3511 1.79938 11.5605L26.639 0.149023C27.7891 -0.364964 28.7952 0.454314 28.4202 2.54961V2.54842Z"
                    variants={icon}
                    initial="hidden"
                    animate="visible"
                    strokeDasharray="0 1"
                    transition={{
                        default: { duration: 2, ease: "easeInOut" },
                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                    }}
                />
            </motion.svg>
        </div>
    )
}