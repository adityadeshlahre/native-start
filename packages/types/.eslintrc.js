module.exports = {
  extends: ["@repo/typescript-config/base.json"],
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
  },
};
