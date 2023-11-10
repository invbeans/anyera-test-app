import styles from './main.module.css'
import Image from 'next/image'

export default function MainContainer({ children }) {
    return (
        <div className={styles["main-container"]}>
            <Image src='/background.png' alt="background image" className={styles["image-container"]} fill={true}></Image>
            <div className={styles["color-overlay"]}>
                <div className={styles["children-container"]}>
                    {children}
                </div>
            </div>
        </div>
    )
}