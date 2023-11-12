import './globals.css'
import { roboto } from '@/app/fonts'
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
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
