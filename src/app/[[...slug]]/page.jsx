// import Navbar from './_components/navigation/navbar'
// import LogoNavbar from './_components/navigation/logo-navbar'
// import SignInButton from './_components/navigation/signin-button'
// import Footer from './_components/footer/footer'
// import MainContainer from './_components/main/main-container'
// import TextContainer from './_components/main/text-container'
// import FormContainer from './_components/main/forms/form-container'
// import LogoFooter from './_components/footer/logo-footer'
// import ExampleButton from './_components/example'
// import ExampleAbove from './_components/example-above'
import Navbar from "../navigation/components/navbar"
import LogoNavbar from "../navigation/components/logo-navbar"
import SignInButton from "../navigation/components/signin-button"
import Footer from "../footer/components/footer"
import MainContainer from "../main/components/main-container"
import TextContainer from "../main/components/text-container"
import FormContainer from "../forms/components/form-container"
import LogoFooter from "../footer/components/logo-footer"
import OverlayBackground from "../overlay/components/overlay-background"

export default function Home({ params }) {
  return (

    <>
    {params.slug == "signin" && <OverlayBackground/>}
      <Navbar>
        <LogoNavbar />
        <SignInButton />
      </Navbar>
      <MainContainer>
        <TextContainer />
        <FormContainer />
      </MainContainer>
      <Footer>
        <LogoFooter />
      </Footer>
    </>
  )
}
