import { useRouter } from 'next/router'

const Demo1 = () => {
  const router = useRouter()

  console.log('参数值', router.query)

  const handleGo = () => {
    router.push({ pathname: '/', query: { from: 'demo1' } })
  }
  return <button onClick={handleGo}>点我跳转</button>
}

export default Demo1