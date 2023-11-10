import Navbar from './navigation/navbar'
import LogoNavbar from './navigation/logo-navbar'
import SignInButton from './navigation/signin-button'
import Footer from './footer/footer'
import MainContainer from './main/main-container'
import TextContainer from './main/text-container'
import FormContainer from './main/forms/form-container'
import LogoFooter from './footer/logo-footer'

export default function Home() {
  return (
    // <main className={styles.main}>

    <>
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


    // </main>
  )
}
