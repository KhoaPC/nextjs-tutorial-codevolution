import '../styles/globals.css'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import '../styles/layout.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
