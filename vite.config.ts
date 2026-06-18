import { defineConfig } from "vite";

function resolvePagesBase(): string {
  const repository = process.env.GITHUB_REPOSITORY;

  if (!repository) return "/ceu/";

  const repoName = repository.split("/").at(-1) ?? "ceu";
  return repoName.endsWith(".github.io") ? "/" : `/${repoName}/`;
}

export default defineConfig(({ command }) => ({
  root: "src",
  base: command === "build" ? resolvePagesBase() : "/",
  build: {
    outDir: "../dist",
    emptyOutDir: true
  },
  cacheDir: "../node_modules/.vite"
}));
