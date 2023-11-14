"use client"

import Footer from "../footer/components/footer"
import MainContainer from "../main/components/main-container"
import TextContainer from "../main/components/text-container"
import FormContainer from "../forms/components/form-container"
import PageTransitionContainer from "../page-transition-container"

export default function SecondPage() {
  return (
    <PageTransitionContainer>
      <MainContainer>
        <p style={{ fontSize: '1.5rem', color: '#FFF' }}>Это копия главной страницы</p>
        <TextContainer isTextAnimated={true} />
        <FormContainer />
      </MainContainer>
      <Footer isLogoAnimated={true} />
    </PageTransitionContainer>
  )
}
