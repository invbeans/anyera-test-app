import AnimatedLogo from './animated-logo'
import styles from './footer.module.css'
import whatsappSvg from '../../../../public/whatsapp-svg-info.json'
import telegramSvg from '../../../../public/telegram-svg-info.json'
import vkSvg from '../../../../public/vk-svg-info.json'
import emailSvg from '../../../../public/email-svg-info.json'

export default function Footer({ children }) {
    return (
        <footer className={styles.footer}>
            <div className={styles["footer-col"]}>
                {children}
                <p className={styles.p}>Аренда жилья и автомобилей от владельцев</p>
            </div>
            <div className={styles["footer-col"]}>
                <div className={styles["icons-div"]}>
                    <AnimatedLogo viewBox={whatsappSvg.viewBox} d={whatsappSvg.d} />
                    <AnimatedLogo viewBox={telegramSvg.viewBox} d={telegramSvg.d} />
                    <AnimatedLogo viewBox={vkSvg.viewBox} d={vkSvg.d} />
                    <AnimatedLogo viewBox={emailSvg.viewBox} d={emailSvg.d} />
                </div>
                <a href='#' className={styles.p}>Политика конфиденциальности</a>
            </div>
        </footer>
    )
}