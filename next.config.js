/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  images: {
    domains: ['your-cdn-domain.com'], // Add your image domains here
  },
}

module.exports = nextConfig