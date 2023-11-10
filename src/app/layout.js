import './globals.css'
import { ceraPro } from './fonts'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata = {
  title: 'DRIVERAVE',
  description: 'Аренда жилья и автомобилей от владельцев',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={ceraPro.className}>{children}</body>
    </html>
  )
}
