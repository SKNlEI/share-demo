import type { NextApiRequest, NextApiResponse } from 'next'
import news from '../../json/toutiao.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(news.result)
}