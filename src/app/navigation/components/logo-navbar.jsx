import styles from './navigation.module.css'

export default function LogoNavbar() {
    return (
        <div className={styles["logo-nav"]}>
            <img src='/anyera-test-app/driverave.svg' alt='logo'></img>
        </div>
    )
}