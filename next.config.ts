import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const staticBasePath = process.env.STATIC_BASE_PATH?.trim();
const isStaticExport = isGitHubPages || Boolean(staticBasePath);
const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ??
  "jj-preservation-circumcision";
const pagesBasePath = staticBasePath ?? (isGitHubPages ? `/${repositoryName}` : "");

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : undefined,
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath || undefined,
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: true,
  },
  typescript: {
    // The static review build does not include the Cloudflare-only db/worker modules.
    ignoreBuildErrors: isStaticExport,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: pagesBasePath,
  },
};

export default nextConfig;
