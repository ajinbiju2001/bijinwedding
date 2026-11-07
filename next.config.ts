import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/bijinwedding" : undefined,
  assetPrefix: isGitHubPages ? "/bijinwedding/" : undefined,
};
export default nextConfig;
