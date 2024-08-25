/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: false,  // Disable server-side image optimization
  },
  basePath: '/next-ofl',
};

export default nextConfig;
