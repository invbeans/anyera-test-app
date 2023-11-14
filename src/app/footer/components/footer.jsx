import dynamic from "next/dynamic"

import AnimateContact from './animated-contact'
import styles from './footer.module.css'
import whatsappSvg from '../../../../public/whatsapp-svg-info.json'
import telegramSvg from '../../../../public/telegram-svg-info.json'
import vkSvg from '../../../../public/vk-svg-info.json'
import emailSvg from '../../../../public/email-svg-info.json'
const LogoFooter = dynamic(() => import("./logo-footer"), { ssr: false })

export default function Footer({ isLogoAnimated }) {
    return (
        <footer className={styles.footer}>
            <LogoFooter isLogoAnimated={isLogoAnimated} />
            <div className={styles["footer-col"]}>
                <div className={styles["icons-div"]}>
                    <AnimateContact viewBox={whatsappSvg.viewBox} d={whatsappSvg.d} />
                    <AnimateContact viewBox={telegramSvg.viewBox} d={telegramSvg.d} />
                    <AnimateContact viewBox={vkSvg.viewBox} d={vkSvg.d} />
                    <AnimateContact viewBox={emailSvg.viewBox} d={emailSvg.d} />
                </div>
                <a href='#' className={styles.p}>Политика конфиденциальности</a>
            </div>
        </footer>
    )
}