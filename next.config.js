/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn2.thecatapi.com','25.media.tumblr.com','30.media.tumblr.com'],
  },
}

module.exports = nextConfig
