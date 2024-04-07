/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'f00d4tehg0dz`s Custom Workspaces',
    description: '"The custom store for f00d4tehg0dz supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://f00d4tehg0dz.github.io/kasm_workspaces/',
    contactUrl: 'https://github.com/f00d4tehg0dz/kasm_workspaces/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm_workspaces/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig