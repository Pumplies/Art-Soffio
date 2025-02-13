/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // Отключает Strict Mode (ускоряет dev-режим)
    experimental: {
      turbo: {}, // Turbopack ожидает объект, а не `true`
    },
    images: {
      unoptimized: false, // Глобально включает оптимизацию Next.js Image
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = { fs: false, net: false, tls: false };
      }
      return config;
    },
  };
  
  export default nextConfig;
  