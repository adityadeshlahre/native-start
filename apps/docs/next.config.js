/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "@repo/types"],
  output: "standalone",
  productionBrowserSourceMaps: false,
};
