import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entryPoints: ["src/index.ts"],
  clean: true,
  outDir: "dist",
  target: "node22",
  platform: "node",
  format: ["cjs"],
  ...options,
  external: ['@prisma/client'],
  copy: [
    { src: 'node_modules/.prisma/client/*', dest: 'dist/node_modules/.prisma/client' },
  ],
}));
