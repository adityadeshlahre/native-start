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

// export default [...compat.extends("@repo/typescript-config/base.json"), {
//     languageOptions: {
//         ecmaVersion: 5,
//         sourceType: "script",

//         parserOptions: {
//             project: ["./tsconfig.json"],
//             tsconfigRootDir: "/home/cluz/Desktop/localProjects/next-start/packages/types",
//         },
//     },
// }];

import tsConfig from "@repo/typescript-config/base.json";

/** @type {import("eslint").Linter.FlatCompat[]} */
export default [
  ...compat.config(tsConfig),
  {
    languageOptions: {
      ecmaVersion: 5,
      sourceType: "script",
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: path.resolve(__dirname),
      },
    },
  },
];
