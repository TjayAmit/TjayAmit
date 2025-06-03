import type { NextConfig } from "next";

const commonConfig: NextConfig = {
  reactStrictMode: true,
};

const productionConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
};

const developmentConfig: NextConfig = {
  // Add any development-specific config here
};

export default process.env.NODE_ENV === 'production' 
  ? { ...commonConfig, ...productionConfig }
  : { ...commonConfig, ...developmentConfig };
