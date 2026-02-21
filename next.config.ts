import type { NextConfig } from "next";

const commonConfig: NextConfig = {
  reactStrictMode: true,
};

const isGithubPagesBuild =
  process.env.GITHUB_ACTIONS === "true" ||
  process.env.GH_PAGES === "true" ||
  process.env.npm_lifecycle_event === "deploy";
const repositoryParts = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const ownerName = repositoryParts[0] ?? "";
const repositoryName = repositoryParts[1] ?? "TjayAmit";
const isUserPagesRepository =
  ownerName.length > 0 && ownerName.toLowerCase() === repositoryName.toLowerCase();
const basePath =
  isGithubPagesBuild && !isUserPagesRepository ? `/${repositoryName}` : "";

const productionConfig: NextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    // Required for fully static hosts like GitHub Pages.
    unoptimized: true,
  },
};

const developmentConfig: NextConfig = {
  // Add any development-specific config here
};

export default process.env.NODE_ENV === 'production' 
  ? { ...commonConfig, ...productionConfig }
  : { ...commonConfig, ...developmentConfig };
