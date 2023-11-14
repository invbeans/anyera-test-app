"use client"

import Footer from "./footer/components/footer"
import MainContainer from "./main/components/main-container"
import TextContainer from "./main/components/text-container"
import FormContainer from "./forms/components/form-container"
import OverlayBackground from "./overlay/components/overlay-background"
import PageTransitionContainer from "./page-transition-container"

export default function Home() {
  return (
      <PageTransitionContainer>
        <MainContainer>
          <TextContainer isTextAnimated={true} />
          <FormContainer />
        </MainContainer>
        <Footer isLogoAnimated={true} />
      </PageTransitionContainer>
  )
}
