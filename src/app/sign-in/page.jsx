"use client"

import Footer from "../footer/components/footer"
import MainContainer from "../main/components/main-container"
import TextContainer from "../main/components/text-container"
import FormContainer from "../forms/components/form-container"
import OverlayBackground from "../overlay/components/overlay-background"

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
