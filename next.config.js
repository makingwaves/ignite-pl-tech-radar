/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{
      source: '/',
      destination: '/tech',
      permanent: true
    }]
  }
}

module.exports = nextConfig
