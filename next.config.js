/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
  reactStrictMode: false,
  distDir: 'build',
  output: 'export'
};

module.exports = nextConfig;
