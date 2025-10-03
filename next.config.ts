import * as path from 'path';
import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    const alias = config.resolve!.alias as { [key: string]: string };
    alias['@'] = path.resolve(__dirname);
    return config;
  },
};

export default nextConfig;