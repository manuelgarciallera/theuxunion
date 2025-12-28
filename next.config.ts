import type { NextConfig } from "next";

const repo = "theuxunion";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : "",
  images: { unoptimized: true },
  trailingSlash: true,
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default nextConfig;
