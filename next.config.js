/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['*'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  include: ['production'],
  register: true,
});

module.exports = withPWA(nextConfig);
