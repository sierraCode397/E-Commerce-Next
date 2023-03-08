/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'placeimg.com', 'wixmp.com', 'romapy', 'cdn.pixabay.com', 'c8.alamy.com'],
  },
}

module.exports = nextConfig