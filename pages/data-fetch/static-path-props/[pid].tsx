import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import fs from 'fs'
import path from 'path'

const StaticPaths = ({ data }: { data: any }) => {
  return (
    <div style={{ padding: '30px 150px' }}>
      <h3>{data.title}</h3>
      <div style={{ width: '300px' }}>
        <Image
          // layout="fill"
          width="200"
          height="300"
          placeholder="blur"
          blurDataURL={'loading'}
          src={data.thumbnail_pic_s} alt=""
        />
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pathResult = path.resolve(process.cwd(), 'json/toutiao.json')
  const data = fs.readFileSync(pathResult, 'utf-8')
  const result = JSON.parse(data)
  const pidList = result.result.data.map((v: any) => ({ params: { pid: v.uniquekey } }))
  return {
    paths: pidList,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps  = async (ctx) => {
  console.log('间隔40s重新构建这个页面呀')
  const pid = ctx.params?.pid || ''

  const pathResult = path.resolve(process.cwd(), 'json/toutiao.json')
  const data = fs.readFileSync(pathResult, 'utf-8')

  const result = JSON.parse(data)

  const item = result.result.data.find((v: any) => v.uniquekey === pid)

  return {
    props: { data: item},
    // 开启 ISR，最多每40s重新生成一次页面
    revalidate: 40
  }
}

export default StaticPaths
