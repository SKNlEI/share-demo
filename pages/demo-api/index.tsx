import { useState, useEffect } from "react"

const DemoApi = () => {
  const [name, setName] = useState('')

  const handleName = async () => {
    const res = await fetch('/api/hello')
    const data = await res.json()
    setName(data.name)
  }

  useEffect(() => {
    handleName()
  }, [])

  return (
    <div>
      <button>点击获取name</button>
      <div>name:{name}</div>
    </div>
  )
}

export default DemoApi
