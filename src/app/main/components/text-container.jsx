"use client"

import { ceraPro } from '../../fonts'
import styles from './main.module.css'
import { motion } from "framer-motion";

export default function TextContainer({ isTextAnimated }) {
    const text = {
        hidden: (isTextAnimated) ? {
            opacity: 0,
            translateX: '10%'
        } : {
            opacity: 1,
            translateX: '0%'
        },
        visible: {
            opacity: 1,
            translateX: '0%'
        }
    }

    return (
        <motion.div
            variants={text}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className={styles["text-container"] + " " + ceraPro.className}>
            <div className={styles["small-text"]}>Ut enim ad minim veniam</div>
            <div className={styles["large-text"]}>Duis aute irure dolor<br></br>in reprehenderit</div>
            <div className={styles["medium-text"]}>Duis aute irure dolor in reprehenderit</div>
        </motion.div>
    )
}