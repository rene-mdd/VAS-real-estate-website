/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "VAS-real-estate-website";

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Only apply GitHub Pages paths in production builds
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

module.exports = nextConfig;
