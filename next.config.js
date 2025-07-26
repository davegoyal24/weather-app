/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  distDir: 'out',
};

module.exports = nextConfig;
