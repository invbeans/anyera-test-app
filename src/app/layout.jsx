import './globals.css'
import { roboto } from '@/app/fonts'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Navbar from "./navigation/components/navbar"
import LogoNavbar from "./navigation/components/logo-navbar"
import SignInButton from "./navigation/components/signin-button"

export const metadata = {
  title: 'DRIVERAVE',
  description: 'Аренда жилья и автомобилей от владельцев',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
          <Navbar>
            <LogoNavbar />
            <SignInButton />
          </Navbar>
          {children}
      </body>
    </html>
  )
}
