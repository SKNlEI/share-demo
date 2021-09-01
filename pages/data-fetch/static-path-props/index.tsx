import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import styles from './index.module.less'

const DyanmicApi = ({data = []}: { data: any[] }) => {

  return (
    <div className={styles.DyanmicApi}>
      <h3>信息展示</h3>
      {data.map((v: any, index: number) => (
        <div key={index}>
          {/* <Image src={v.thumbnail_pic_s} alt="" /> */}
          <div>来源：{v.author_name}  标签：{v.category}</div>
          <Link
            href="/data-fetch/static-path-props/[pid]"
            as={`/data-fetch/static-path-props/${v.uniquekey}`}
          >
            {v.title}
          </Link>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps  = async (ctx) => {
  console.log('间隔40s重新构建这个页面呀')

  const pathResult = path.resolve(process.cwd(), 'json/toutiao.json')
  const data = fs.readFileSync(pathResult, 'utf-8')

  const result = JSON.parse(data)

  return {
    props: { data: result.result.data },
    // 开启 ISR，最多每40s重新生成一次页面
    revalidate: 40
  }
}

export default DyanmicApi