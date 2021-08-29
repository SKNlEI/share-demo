import { GetStaticProps } from 'next'
import Axios from 'axios'
import React from 'react'

const StaticProps = ({data}: { data: any }) => {
  const listUrl: any[] = data.obj.linkConfigList
  return (
    <div>
      <h3>static-props</h3>
      <div>
        {listUrl.map((v, i) => (
          <React.Fragment key={i}>
            <div>链接名字{v.name}</div>
            <div>链接地址{v.url}</div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const url = 'https://mcs-mimp-web.sf-express.com/mcs-mimp/config/frontLinkList'
  const res = await Axios.post(url, { version: '1.0' })
  return { props: { data: res.data } }
}

export default StaticProps