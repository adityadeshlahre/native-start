/** @type {import('next').NextConfig} */
const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");
const path = require("path");
module.exports = {
  output: "standalone",
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  transpilePackages: [
    "@repo/ui",
    "validation-schemas",
    "@repo/database",
    "@repo/types",
  ],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    config.cache = false;
    return config;
  },
  basePath: "/web",
  // outputFileTracingRoot: path.join(__dirname, "./../../"),
};
