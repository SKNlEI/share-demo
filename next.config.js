const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const withLess = require("next-with-less")
const config = withLess({
  reactStrictMode: true,
  images: {
    domains: ['dfzximg02.dftoutiao.com']
  }
})

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(config)


// {
//   async redirects() {
//     return [
//       {
//         source: '/demo1',
//         destination: '/server-props',
//         permanent: false
//       }
//     ]
//   }
// }


// withLess({
//   reactStrictMode: true,
//   experimental: {
//     esmExternals: true
//   },
//   images: {
//     domains: ['dfzximg02.dftoutiao.com']
//   },
//   async redirects() {
//     return [
//       {
//         source: '/demo1',
//         destination: '/server-props',
//         permanent: false
//       }
//     ]
//   }
// })
