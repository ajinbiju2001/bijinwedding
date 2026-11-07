import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: isProduction ? "/bijinwedding" : undefined,
  assetPrefix: isProduction ? "/bijinwedding/" : undefined,
};
export default nextConfig;
