import Link from 'next/link'
import styles from './navigation.module.css'
import Image from 'next/image'

export default function SignInButton() {
    return (
        <Link href="sign-in" scroll={false}>
            <div className={styles["signin-button"]}>
                <div className={styles["menu-button-div"]}>
                    <div className={styles["menu-rectangle"]}>
                        <Image src='/anyera-test-app/rectangle.svg' alt="menu" fill={true}></Image>
                    </div>
                    <div className={styles["menu-rectangle"]}>
                        <Image src='/anyera-test-app/rectangle.svg' alt="menu" fill={true}></Image>
                    </div>
                    <div className={styles["menu-rectangle"]}>
                        <Image src='/anyera-test-app/rectangle.svg' alt="menu" fill={true}></Image>
                    </div>
                </div>
                <div className={styles["user-image-div"]}>
                    <Image src='/anyera-test-app/user-images.svg' alt="user-image" fill={true}></Image>
                </div>
            </div>
        </Link>
    )
}