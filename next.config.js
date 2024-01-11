/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND_BASE_URL: process.env.BACKEND_BASE_URL
  },
  images: {
    domains: ['oppo-zone-e1d94919d91e.herokuapp.com']
  }

}

module.exports = nextConfig
