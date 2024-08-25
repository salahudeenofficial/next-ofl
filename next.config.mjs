/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
  output: "export",
  basePath: "/next-ofl", // Replace with your GitHub repository name
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
};

export default nextConfig;
