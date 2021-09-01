const withPlugins = require('next-compose-plugins')
const withLess = require("next-with-less")
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
module.exports = withPlugins(
  [
    [withLess],
    [withBundleAnalyzer],
    [withMDX, {pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']}]
  ],
  {
    reactStrictMode: true,
    images: {
      domains: ['dfzximg02.dftoutiao.com']
    }
  }
)

