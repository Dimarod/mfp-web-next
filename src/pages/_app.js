import '@/styles/globals.css'
import { Tenor_Sans, DM_Sans } from 'next/font/google'

const tenor = Tenor_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-tenor',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${tenor.variable} ${dmSans.variable} font-sans`}>
      <Component {...pageProps} />
    </main>

  )
}
