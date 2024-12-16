import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// export default [
//   ...compat.extends("@repo/eslint-config/library.js"),
//   {
//     languageOptions: {
//       parser: tsParser,
//       ecmaVersion: 5,
//       sourceType: "script",

//       parserOptions: {
//         project: true,
//       },
//     },

//     rules: {
//       "turbo/no-undeclared-env-vars": [
//         "error",
//         {
//           allowList: ["NODE_ENV"],
//         },
//       ],
//     },
//   },
// ];

import libraryConfig from "@repo/eslint-config/library.js";

/** @type {import("eslint").Linter.FlatCompat[]} */
export default [...compat.config(libraryConfig)];
