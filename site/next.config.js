/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'f00d4tehg0dz Custom Kasm Workspaces',
    description: 'f00d4tehg0dz store of custom Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://f00d4tehg0dz.github.io/kasm_f00d4tehg0dz_registry/',
    contactUrl: 'https://github.com/f00d4tehg0dz/kasm_f00d4tehg0dz_registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
