import styles from '../main.module.css'

export default function BiggerFormContainer({ children }) {
    return (
        <form className={styles["bigger-form-container"]}>
            {children}
        </form>
    )
}