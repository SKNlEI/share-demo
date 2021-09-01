const withLess = require("next-with-less")

/** @type {import('next').NextConfig} */
module.exports = withLess({
  reactStrictMode: true,
  experimental: {
    esmExternals: true
  },
  images: {
    domains: ['dfzximg02.dftoutiao.com']
  },
  async redirects() {
    return [
      {
        source: '/demo1',
        destination: '/server-props',
        permanent: false
      }
    ]
  }
})


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


withLess({
  reactStrictMode: true,
  experimental: {
    esmExternals: true
  },
  images: {
    domains: ['dfzximg02.dftoutiao.com']
  },
  async redirects() {
    return [
      {
        source: '/demo1',
        destination: '/server-props',
        permanent: false
      }
    ]
  }
})
