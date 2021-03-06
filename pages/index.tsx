import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Row, Col } from 'antd'
import NavLink from '../components/NavLink/NavLink'

const Home: NextPage = () => {
  const router = useRouter()

  const handleGoMore = () => {

    router.push({ pathname: '/demo', query: { a: 'hahha', b: '233' } })
    // router.push('/dynamic/single/[id]', '/dynamic/single/2')
    // router.push('/dynamic/more/[...id]', '/dynamic/more/1/2')


  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Button>测试</Button>
        
        <NavLink href={{pathname: '/demo1',query: {a: 10, b: 20, name: 'next'}}} text="路由传参" />
        <NavLink href="/dynamic/single/[id]" as="/dynamic/single/20" text="单参数动态路由" />
        <NavLink href="/dynamic/more/[...id]" as="/dynamic/more/20/21" text="多参数动态路由" />
        <NavLink href="/dynamic/song" text="跳转song - page 动态api路由" />
        <NavLink href="/demo-api" text="测试API路由" />
        <NavLink href="/style-page/sass-demo" text="sass 样式测试" />
        <NavLink href="/data-fetch/static-props" text="服务端静态生成" />
        <NavLink href="/data-fetch/server-props" text="服务端动态生成" />
        <NavLink href="/data-fetch/client-render" text="客户端渲染" />
        <NavLink href="/data-fetch/static-paths/[pid]" as="/data-fetch/static-paths/1" text="指定动态路由生成-1" />
        <NavLink href="/data-fetch/static-paths/[pid]" as="/data-fetch/static-paths/2" text="指定动态路由生成-2" />
        <NavLink href="/data-fetch/static-paths/[pid]" as="/data-fetch/static-paths/3" text="指定动态路由生成-3"/>

        <NavLink href="/data-fetch/static-path-props" text="static-path-props" />
        <NavLink href="/mdx" text="md文档" />
        <button onClick={handleGoMore}>多参数动态路由</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
