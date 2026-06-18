import { defineConfig } from "vite";

function resolvePagesBase(): string {
  const repository = process.env.GITHUB_REPOSITORY;

  if (!repository) return "/ceu/";

  const repoName = repository.split("/").at(-1) ?? "ceu";
  return repoName.endsWith(".github.io") ? "/" : `/${repoName}/`;
}

export default defineConfig(({ command }) => ({
  base: command === "build" ? resolvePagesBase() : "/"
}));

