import Link from "next/link"
import styles from './overlay.module.css'

export default function OverlayExitButton() {
    return (
        <Link href="/" scroll={false}>
            <button className={styles["exit-button"]}></button>
        </Link>
    )
}