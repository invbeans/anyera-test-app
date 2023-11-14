"use client"

import dynamic from "next/dynamic"
//import { roboto } from '@/app/fonts'
import Footer from "../footer/components/footer"
import MainContainer from "../main/components/main-container"
import TextContainer from "../main/components/text-container"
import FormContainer from "../forms/components/form-container"

const OverlayBackground = dynamic(() => import("../overlay/components/overlay-background"), { ssr: false })
import PageTransitionContainer from "../page-transition-container"

export default function SecondPage({ params }) {
  let isOverlayVisible = params.slug == "signin"

  return (
    <>
      {!isOverlayVisible && <PageTransitionContainer>
        <MainContainer>
          <p style={{ fontSize: '1.5rem', color: '#FFF' }}>Это копия главной страницы</p>
          <TextContainer isTextAnimated={!isOverlayVisible} />
          <FormContainer />
        </MainContainer>
        <Footer isLogoAnimated={!isOverlayVisible} />
      </PageTransitionContainer>
      }
      {isOverlayVisible && <><OverlayBackground isVisible={isOverlayVisible} />
        <MainContainer>
          <p style={{ fontSize: '1.5rem', color: '#FFF' }}>Это копия главной страницы</p>
          <TextContainer isTextAnimated={!isOverlayVisible} />
          <FormContainer />
        </MainContainer>
        <Footer isLogoAnimated={!isOverlayVisible} /></>}
    </>
  )
}
