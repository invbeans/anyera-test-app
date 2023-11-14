"use client"

import dynamic from "next/dynamic"
import Footer from "../footer/components/footer"
import MainContainer from "../main/components/main-container"
import TextContainer from "../main/components/text-container"
import FormContainer from "../forms/components/form-container"

const OverlayBackground = dynamic(() => import("../overlay/components/overlay-background"), { ssr: false })

export default function OverlaySignIn() {
    return (
        <>
            <OverlayBackground isVisible={true}/>
            <MainContainer>
                <TextContainer isTextAnimated={false} />
                <FormContainer />
            </MainContainer>
            <Footer isLogoAnimated={false} />
        </>
    )
}
