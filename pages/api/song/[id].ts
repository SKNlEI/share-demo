import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const news = fs.readFileSync(process.cwd()+ '/json/toutiao.json', 'utf-8')
  res.status(200).json(JSON.parse(news))
}
