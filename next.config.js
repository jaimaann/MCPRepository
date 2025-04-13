/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  // Important for Netlify deployments
  trailingSlash: true,
};

module.exports = nextConfig;
