/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Important for Netlify deployments
  },
  // Important for Netlify deployments
  trailingSlash: true,
};

module.exports = nextConfig;
