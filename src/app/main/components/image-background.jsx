import styles from './main.module.css'
import Image from 'next/image'

export default function ImageBackground() {
    return (
        <Image src='/background.png' alt="background image" className={styles["image-container"]} fill={true} priority></Image>
    )
}