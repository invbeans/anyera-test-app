"use client"

import OverlayExitButton from './overlay-exit-button'
import styles from './overlay.module.css'
import { circe } from '../../fonts'
import OverlayInput from './overlay-input'
import OverlayEnterButton from './overlay-enter-button'
import OverlayCheckbox from './overlay-checkbox'
import { motion, AnimatePresence } from "framer-motion"

export default function OverlayContainer({ isVisible }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        ease: "linear",
                        duration: 0.6
                    }}
                >
                    <div className={styles["overlay-container"]}>
                        <div className={styles["justify-right-row"]}>
                            <OverlayExitButton />
                        </div>
                        <div className={styles["form-container"]}>
                            <div className={styles["justify-left-row"]}>
                                <p className={styles["enter-p"] + " " + circe.className}>Вход</p>
                            </div>
                            <div className={styles["inputs-row"]}>
                                <OverlayInput name={"email-phone"} placeholder={"Введите e-mail или телефон"} />
                                <OverlayInput name={"password"} placeholder={"Введите пароль"} />
                            </div>
                            <div className={styles["space-between-row"]}>
                                <OverlayCheckbox />
                                <a href='#' className={styles["password-link"]}>Забыли пароль?</a>
                            </div>
                            <OverlayEnterButton />
                            <div className={styles["justify-center-row"]}>
                                <p className={styles.question}>Нет аккаунта?</p>
                                <a href='#' className={styles.registration}>Регистрация</a>
                            </div>
                        </div>
                    </div>
                </motion.div>)}
        </AnimatePresence>
    )
}