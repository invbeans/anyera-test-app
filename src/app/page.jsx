"use client"

import dynamic from "next/dynamic"

import Footer from "./footer/components/footer"
import MainContainer from "./main/components/main-container"
import TextContainer from "./main/components/text-container"
import FormContainer from "./forms/components/form-container"

const OverlayBackground = dynamic(() => import("./overlay/components/overlay-background"), { ssr: false })
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
