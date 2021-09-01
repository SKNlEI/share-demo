import { GetStaticProps } from 'next'
import useSwr from 'swr'
import Image from 'next/image'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const DyanmicApi = () => {
  const { data, error } = useSwr('/api/song', fetcher)

  console.log('data==>', data)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="DyanmicApi">
      <h3>信息展示</h3>
      {data.result.data.map((v: any, index: number) => (
        <div key={index}>
          {/* <Image src={v.thumbnail_pic_s} alt="" /> */}
          <div>来源：{v.author_name}  标签：{v.category}</div>
          <Link href="/dynamic/song/[id]" as={`/dynamic/song/${v.uniquekey}`}>{v.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default DyanmicApi