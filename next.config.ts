import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: false },
  images: {
    domains: ["themartyapp.com", "cdn.themartyapp.com"],
  },
};

export default nextConfig;