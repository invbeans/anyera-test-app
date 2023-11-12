import {Roboto} from 'next/font/google'
import localFont from 'next/font/local'

export const roboto = Roboto({
    subsets: ['cyrillic'],
    weight: '400',
})

export const ceraPro = localFont({
    src: './CeraPro-Regular.woff',
})

export const circe = localFont({
    src: './Circe-Regular.woff',
})