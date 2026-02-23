/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const BASE_PATH = "/VAS-real-estate-website";

module.exports = {
  // Add this prefix only for production, so _next, CSS, JS all use it on GitHub Pages
  assetPrefix: isProd ? BASE_PATH : "",

  // Needed if you use next/image with static export
  images: {
    unoptimized: true,
  },

  // Expose the base path to your code (so you can prepend to <img> src, <link> href, etc)
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? BASE_PATH : "",
  },

  // Needed for static export
  output: "export",

  // Routing basePath: works with next/link and next/router
  basePath: isProd ? BASE_PATH : "",

  // Ensure static export generates /index.html, /about/index.html, etc.
  trailingSlash: true,
};
