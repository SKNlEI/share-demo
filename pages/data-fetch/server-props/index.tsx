import Axios from 'axios'
import { GetServerSideProps } from 'next'

const ServerProps = ({ data }: { data: any[] }) => {
  return (
    <div>
      <h3>ukjfg</h3>
      {data.map((item, i) => (
        <div key={i}>
          <span>{item.name}-</span>
          <span>{item.url}</span>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const url = 'https://mcs-mimp-web.sf-express.com/mcs-mimp/config/frontLinkList'
  const res = await Axios.post(url, { version: '1.0' })
  return { props: { data: res.data.obj.linkConfigList } }
}


export default ServerProps