import styles from '../main.module.css'

export default function MobileFormContainer({ children }) {
    return (
        <form className={styles["mobile-form-container"]}>
            {children}
        </form>
    )
}