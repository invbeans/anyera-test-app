import Link from "next/link"
import styles from './overlay.module.css'

export default function OverlayExitButton() {
    return (
        <Link href="/">
            <button className={styles["exit-button"]}></button>
        </Link>
    )
}