import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import useSwr from 'swr'
import Image from 'next/image'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const DyanmicApi = () => {
  const router = useRouter()
  const { data, error } = useSwr(`/api/song/${router.query.id}`, fetcher)

  console.log('data==>', data)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div className="DyanmicApi">
      <h3>{data.data.title}</h3>
      <div style={{ width: '300px' }}>
        <Image
          // layout="fill"
          width="200"
          height="300"
          placeholder="blur"
          blurDataURL={'loading'}
          src={data.data.thumbnail_pic_s} alt=""
        />
      </div>
    </div>
  )
}

export default DyanmicApi