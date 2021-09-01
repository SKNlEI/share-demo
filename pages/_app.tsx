import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'antd/dist/antd.css'

function MyApp({ Component, pageProps, router }: AppProps) {

  useEffect(() => {
    const handleChangeStart = () => {
      console.log('hashChangeStart')
      NProgress.start()
    }

    const handleChangeComponent = () => {
      console.log('routeChangeComplete')
      NProgress.done()
    }
    router.events.on("routeChangeStart", handleChangeStart)
    router.events.on("routeChangeComplete", handleChangeComponent)
  }, [router])

  return <Component {...pageProps} />
}
export default MyApp
