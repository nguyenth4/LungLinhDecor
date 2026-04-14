/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Cho phép dùng ảnh từ Unsplash và các nguồn ngoài
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
}

module.exports = nextConfig
