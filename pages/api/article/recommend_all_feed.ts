import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const url = 'https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=6898701577642821133'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch(url, { method: 'POST' })
  const data = await response.json()
  res.status(200).json(data)
}
