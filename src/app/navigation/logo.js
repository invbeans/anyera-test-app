import styles from './navigation.module.css'
import Image from 'next/image'

export default function LogoNavbar() {
    return (
        <div className={styles["logo-nav"]}>
            <Image src='/driverave.svg' alt="logo" width={189.75} height={30}></Image>
        </div>
    )
}