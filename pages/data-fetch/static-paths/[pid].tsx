import { GetStaticPaths, GetStaticProps } from 'next'

const StaticPaths = ({ data }: { data: any }) => {
  return (
    <h3>{data.title ? data.title : '没有预渲染'}</h3>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [{ params: { pid: '1' } }, { params: { pid: '2' } }],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps  = async (ctx) => {
  let data = { title: '' }
  if (ctx.params?.pid === '1') {
    data = { title: '我是第一页数据，静态生成' }
  }

  if (ctx.params?.pid === '2') {
    data = { title: '我是第二页数据， 静态生成' }
  }

  return {
    props: { data }
  }
}

export default StaticPaths
