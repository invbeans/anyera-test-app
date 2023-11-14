"use client"

import { useMediaQuery } from "react-responsive"
import MobileFormContainer from "./mobile-form-container"
import BiggerFormContainer from "./bigger-form-container"

export default function FormContainer() {
    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isLandscape = useMediaQuery({ orientation: 'landscape' })
    const isPortraitWidth = useMediaQuery({ maxWidth: 435 })
    const isLandscapeWidth = useMediaQuery({ maxWidth: 935 })

    return (
        <>
            {(isPortrait && isPortraitWidth || isLandscape && isLandscapeWidth) ?
                <MobileFormContainer />
                :
                <BiggerFormContainer />}
        </>
    )
}