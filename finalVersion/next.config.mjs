/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/paper-x-contra',
  assetPrefix: '/paper-x-contra',
};

export default nextConfig;
