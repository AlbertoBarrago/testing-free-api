/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn2.thecatapi.com','cdn2.thedogapi.com','apod.nasa.gov']
  },
  env: {
    BASE_URL: process.env.BASE_URL
  }
}

module.exports = nextConfig
