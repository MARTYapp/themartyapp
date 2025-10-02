import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: false },
  images: {
    domains: ["themartyapp.com", "cdn.themartyapp.com"],
  },
  experimental: {
    // Keep empty or add valid experimental flags if needed
  },
};

export default nextConfig;