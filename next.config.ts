import type { NextConfig } from "next";

// The GitHub Pages project URL is https://reubenxdsilva.github.io/humann/,
// so assets must be served from /humann. Overrideable via env for local dev
// or future custom-domain deployments.
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/numann";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
