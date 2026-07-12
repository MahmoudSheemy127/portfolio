/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // <--- Add this line
  },
  reactStrictMode: true,
};

export default nextConfig;
