import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/theuxunion",
  images: { unoptimized: true },
  trailingSlash: true,
  // opcional, solo si luego ves assets raros:
  // assetPrefix: "/theuxunion",
};

export default nextConfig;
