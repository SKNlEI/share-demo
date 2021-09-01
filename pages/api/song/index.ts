import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pathJson = path.resolve(process.cwd(), 'json/toutiao.json')
  const news = fs.readFileSync(pathJson, 'utf-8')
  res.status(200).json(JSON.parse(news))
}