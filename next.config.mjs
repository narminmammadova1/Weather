// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // CDN veya dış kaynaklar için.
  },
  webpack(config) {
    // Tailwind CSS'i özelleştirmek için gerekli değişiklikler eklenebilir
    return config;
  },
};

export default nextConfig;