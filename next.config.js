/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "standalone", // optional, makes server-side deploy easier
};
