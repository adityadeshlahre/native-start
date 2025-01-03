/** @type {import('next').NextConfig} */
const path = require("path");
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "@repo/types"],
  output: "standalone",
  transpilePackages: ["@repo/ui"],
  productionBrowserSourceMaps: false,
  basePath: "/docs",
  // outputFileTracingRoot: path.join(__dirname, "./../../"),
};
