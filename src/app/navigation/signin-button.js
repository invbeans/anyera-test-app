import styles from './navigation.module.css'
import Image from 'next/image'

export default function SignInButton() {
    return (
        <div className={styles["signin-button"]}>
            <div className={styles["menu-div"]}>
                <div className={styles["menu-rectangle"]}>
                    <Image src='/rectangle.svg' alt="menu" fill={true}></Image>
                </div>
                <div className={styles["menu-rectangle"]}>
                    <Image src='/rectangle.svg' alt="menu" fill={true}></Image>
                </div>
                <div className={styles["menu-rectangle"]}>
                    <Image src='/rectangle.svg' alt="menu" fill={true}></Image>
                </div>
            </div>
            <div className={styles["user-image-div"]}>
                <Image src='/user-images.svg' alt="user-image" fill={true}></Image>
            </div>
        </div>
    )
}