import Axios from 'axios'
import React from 'react'
import { GetStaticProps } from 'next'
import { EyeOutlined, LikeOutlined, MessageOutlined} from '@ant-design/icons'
import { getDateDiff } from '../../../utils/tools'
import styles from './index.module.less'

const ServerProps = ({ data }: { data: any[] }) => {
  console.log(data)
  return (
    <div className={styles.ServerProps}>
      <h3>文章列表</h3>
      {data.map((v: any, i: number) => (
        <div key={i} className={styles['list-item']}>
          <div className={styles['meta-container']}>
            <span>{v.item_info.author_user_info?.user_name || ''}</span>
            <div className={styles.divide}></div>
            <span>{getDateDiff(v.item_info.article_info?.mtime, v.item_info.article_info?.ctime)}</span>
            <div className={styles.divide}></div>
            <div className={styles.tags}>
              {(v.item_info.tags || []).map((item: any, index: number) => (
                <React.Fragment key={index}>
                  <span>{item.tag_name}</span>
                  {v.item_info.tags.length !== index && <i className={styles.dot}/>}
                </React.Fragment>
              ))}
            </div>
          </div>
          <h3>{v.item_info.article_info?.title || ''}</h3>
          <div className={styles.abstract}>{v.item_info.article_info?.brief_content || ''}</div>
          <div className={styles['action-list']}>
            <span><EyeOutlined style={{ marginRight: '5px' }} />{v.item_info.article_info?.view_count || ''}</span>
            <span><LikeOutlined style={{ marginRight: '5px' }} />{v.item_info.article_info?.digg_count || ''}</span>
            <span><MessageOutlined style={{ marginRight: '5px' }} />{v.item_info.article_info?.comment_count || ''}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('getStaticProps====SSG')
  const url = 'https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=6898701577642821133'
  const res = await Axios.post(url, {})

  let data: any = []
  if (res.data.err_msg === 'success') {
    data = res.data.data
  }
  return { props: { data } }
}


export default ServerProps