import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps, router }: AppProps) {

  useEffect(() => {
    console.log(router)
  }, [router, router.pathname])

  return <Component {...pageProps} />
}
export default MyApp
