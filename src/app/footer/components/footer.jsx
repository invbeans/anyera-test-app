"use client"

import styles from './footer.module.css'
import Image from 'next/image'
import { motion } from "framer-motion"

export default function Footer({children}) {
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
        <footer className={styles.footer}>
            <div className={styles["footer-col"]}>
                {children}
                <p className={styles.p}>Аренда жилья и автомобилей от владельцев</p>
            </div>
            <div className={styles["footer-col"]}>
                <div className={styles["icons-div"]}>
                    <Image src='/whatsapp.svg' alt="whatsapp-logo" width={30} height={30}></Image>
                    {/* <Image src='/telegram.svg' alt="telegram-logo" width={30} height={30}></Image> */}
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
                    <Image src='/vk.svg' alt="vk-logo" width={30} height={30}></Image>
                    <Image src='/email.svg' alt="email-logo" width={30} height={30}></Image>
                </div>
                <a href='#' className={styles.p}>Политика конфиденциальности</a>
            </div>
        </footer>
    )
}