import path from "path";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname),
    };
    config.resolve.extensions = [".ts", ".tsx", ".js", ".jsx"];
    return config;
  },
};

export default nextConfig;