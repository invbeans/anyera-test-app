import styles from './navigation.module.css'

export default function LogoNavbar() {
    return (
        <div className={styles["logo-nav"]}>
            {/* <Image src='/driverave.svg' alt="logo"
                sizes='(max-width: 430px) 189.75px,
                (min-width: 431px) 253px,
                189.75'
                width={253}
                height={40}
            ></Image> */}
            <img src='/driverave.svg' alt='logo'></img>
        </div>
    )
}