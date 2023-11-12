import styles from './navigation.module.css'

export default function Navbar({children}) {
    return (
        <nav className={styles.nav}>
            {children}
        </nav>
    )
}