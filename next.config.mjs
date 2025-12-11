/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Portfolio-',
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
module.exports = nextConfig;

export default nextConfig


