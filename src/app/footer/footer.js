import styles from './footer.module.css'
import Image from 'next/image'
import { roboto } from '@/app/fonts'

export default function Footer({children}) {
    return (
        <footer className={styles.footer + " " + roboto.className}>
            <div className={styles["footer-col"]}>
                {children}
                <p className={styles.p}>Аренда жилья и автомобилей от владельцев</p>
            </div>
            <div className={styles["footer-col"]}>
                <div className={styles["icons-div"]}>
                    <Image src='/whatsapp.svg' alt="whatsapp-logo" width={30} height={30}></Image>
                    <Image src='/telegram.svg' alt="telegram-logo" width={30} height={30}></Image>
                    <Image src='/vk.svg' alt="vk-logo" width={30} height={30}></Image>
                    <Image src='/email.svg' alt="email-logo" width={30} height={30}></Image>
                </div>
                <p className={styles.p}>Политика конфиденциальности</p>
            </div>
        </footer>
    )
}