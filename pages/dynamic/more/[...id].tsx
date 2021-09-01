import { useRouter } from 'next/router'

const MoreParams = () => {
  const router = useRouter()

  console.log(router.query)
  return (
    <div>
      <h2>动态路由多参数</h2>
      {/* {(router.query.id as string[]).map((v, i) => (
        <h3 key={i}>{`参数${i + 1}：${v}`}</h3>
      ))} */}
    </div>
  )
}

export default MoreParams