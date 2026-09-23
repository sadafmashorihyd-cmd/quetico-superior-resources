/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/services", destination: "/exploration", permanent: true },
    ];
  },
};

export default nextConfig;
