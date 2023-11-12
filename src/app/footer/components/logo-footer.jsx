import styles from './footer.module.css'

export default function LogoFooter() {
    return (
        <div className={styles["logo-footer"]}>
            <img src='/driverave.svg' alt='logo'></img>
        </div>
    )
}