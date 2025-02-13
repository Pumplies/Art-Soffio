/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: process.env.NODE_ENV === "production", // Включает Strict Mode только в продакшене
  experimental: {
    turbo: {
      loaders: {}, // Опционально, если хочешь тестировать Turbopack
    },
  },
  images: {
    formats: ["image/avif", "image/webp"], // Оптимизация изображений
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, net: false, tls: false };
    }
    return config;
  },
};

export default nextConfig;

  