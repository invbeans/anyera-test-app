"use client"

import OverlayContainer from './overlay-container'
import styles from './overlay.module.css'

export default function OverlayBackground() {
    return (

        <div className={styles["overlay-background"]}>
            <OverlayContainer/>
        </div>
    )
}