import { useRouter } from 'next/router'

const SingleParams = () => {
  const router = useRouter()
  console.log(router.query)
  return (
    <div>
      <h3>路由参数{router.query.id}</h3>
    </div>
  )
}

export default SingleParams
