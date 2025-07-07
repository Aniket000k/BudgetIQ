/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb", // Increase body size limit for server actions
    },
  },
};

export default nextConfig;
