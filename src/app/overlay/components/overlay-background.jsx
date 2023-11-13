"use client"

import OverlayContainer from './overlay-container'
import styles from './overlay.module.css'

export default function OverlayBackground({ isVisible }) {
    return (
        <div className={styles["overlay-background"]}>
            <OverlayContainer isVisible={isVisible}/>
        </div>
    )
}