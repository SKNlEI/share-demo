import { useRouter } from 'next/router'

const Demo1 = () => {
  const router = useRouter()

  console.log('参数值', router.query)

  const handleGo = () => {
    router.back()
  }
  return (
    <div>
      <button onClick={handleGo}>点我跳转</button>
      <div>参数：{JSON.stringify(router.query)}</div>
    </div>
  )
}

export default Demo1