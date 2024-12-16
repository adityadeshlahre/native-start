const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends:['eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      node: {
        extensions: [".ts"],
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/"],
  plugins: ["@typescript-eslint"],
  rules: {
    'class-methods-use-this': 'warn',
    'no-param-reassign': 'warn',
    camelcase: 'warn',
    'no-unused-vars': ['warn', { argsIgnorePattern: 'next' }]
  },
};