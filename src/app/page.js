import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Navbar from './navigation/navbar'
import LogoNavbar from './navigation/logo'
import SignInButton from './navigation/signin-button'
import Footer from './footer/footer'
import MainContainer from './main/main-container'
import TextContainer from './main/text-container'
import FormContainer from './main/forms/form-container'

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
      <Footer />
    </>


    // </main>
  )
}
