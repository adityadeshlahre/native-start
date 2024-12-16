const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/typescript",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  plugins: ["turbo", "@typescript-eslint", "@next/next"],
  rules: {
    "import/no-default-export": "warn",
    "@typescript-eslint/dot-notation": [
      "warn",
      {
        allowKeywords: true,
        allowPrivateClassPropertyAccess: false,
        allowProtectedClassPropertyAccess: false,
        allowIndexSignaturePropertyAccess: false,
      },
    ],
    "@typescript-eslint/no-empty-function": [
      "warn",
      {
        allow: ["arrowFunctions", "functions", "methods"],
      },
    ],
    "@typescript-eslint/no-unused-expressions": [
      "warn",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false,
      },
    ],
    "@next/next/no-duplicate-head": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "eslint-comments/require-description": "warn",
  },
};
