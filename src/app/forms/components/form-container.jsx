"use client"

import { useMediaQuery } from "react-responsive"
import MobileFormContainer from "./mobile-form-container"
import BiggerFormContainer from "./bigger-form-container"

export default function FormContainer() {
    // const isMobileInput = (useMediaQuery({ maxWidth: 430 }) 
    //     && useMediaQuery({ orientation: 'portrait' })) 
    //     || (useMediaQuery({ maxWidth: 930 }) 
    //     && useMediaQuery({ orientation: 'landscape' }));

    const isPortrait = useMediaQuery({ orientation: 'portrait' })
    const isLandscape = useMediaQuery({ orientation: 'landscape' })
    const isPortraitWidth = useMediaQuery({ maxWidth: 435 })
    const isLandscapeWidth = useMediaQuery({ maxWidth: 930 })

    return (
        <>
            {(isPortrait && isPortraitWidth || isLandscape && isLandscapeWidth) ?
                <MobileFormContainer />
                :
                <BiggerFormContainer />}
        </>
    )
}