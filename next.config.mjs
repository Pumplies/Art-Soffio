/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    turbo: {
      rules: {}, // Опционально, если хочешь тестировать Turbopack
    },
  },
  images: {
    formats: ["image/webp"], // Оптимизация изображений
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false, net: false, tls: false };
    }
    return config;
  },
};

export default nextConfig;

  