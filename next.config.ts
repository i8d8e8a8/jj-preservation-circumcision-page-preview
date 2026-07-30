import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ??
  "jj-preservation-circumcision";
const pagesBasePath = isGitHubPages ? `/${repositoryName}` : "";

const nextConfig: NextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath || undefined,
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: true,
  },
  typescript: {
    // The static review build does not include the Cloudflare-only db/worker modules.
    ignoreBuildErrors: isGitHubPages,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: pagesBasePath,
  },
};

export default nextConfig;
