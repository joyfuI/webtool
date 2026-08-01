import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.BASE_PATH,
  allowedDevOrigins: ['*'],
  reactCompiler: true,
  experimental: { useTypeScriptCli: true },
};

export default nextConfig;
