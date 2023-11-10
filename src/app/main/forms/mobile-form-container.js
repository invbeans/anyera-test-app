import styles from '../main.module.css'
import { roboto } from '@/app/fonts'

export default function MobileFormContainer({ children }) {
    return (
        <form className={styles["mobile-form-container"] + " " + roboto.className}>
            {children}
        </form>
    )
}