import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Set to true if you want to avoid Vercel image optimization costs
  },
};

export default nextConfig;
