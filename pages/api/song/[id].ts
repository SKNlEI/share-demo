import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const pathJson = path.resolve(process.cwd(), 'json/toutiao.json')
  const news = fs.readFileSync(pathJson, 'utf-8')
  const uniquekey = req.query.id || ''
  const formateNews = JSON.parse(news)
  const result = formateNews.result.data.find((item: any) => item.uniquekey === uniquekey)
  if (result) {
    res.status(200).json({ success: true, data: result })
  } else {
    res.status(200).json({ success: false, error: 'no data' })
  }
}
