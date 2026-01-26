import '@/styles/globals.css'
import { Tenor_Sans, DM_Sans } from 'next/font/google'
import Head from 'next/head';

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
    <>
      <Head>
        <title>
          My Footprint | Centro Terapéutico en Barranquilla
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="My Footprint SAS" />
      </Head>
      <main className={`${tenor.variable} ${dmSans.variable} font-sans`}>
        <Component {...pageProps} />
      </main>

    </>

  )
}
