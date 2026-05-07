import { defineConfig, loadEnv, type PluginOption } from "vite";
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

/** Vercel sets VERCEL=1 during build — TanStack Start needs Nitro instead of Cloudflare Workers. */
const isVercelBuild = () => process.env.VERCEL === "1";

export default defineConfig(async ({ mode, command }) => {
  const envDefine: Record<string, string> = {};
  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  for (const [key, value] of Object.entries(loadedEnv)) {
    envDefine[`import.meta.env.${key}`] = JSON.stringify(value);
  }

  const useVercelAdapter = command === "build" && isVercelBuild();

  const tanstackPluginOptions = {
    importProtection: {
      behavior: "error" as const,
      client: {
        files: ["**/server/**"],
        specifiers: ["server-only"],
      },
    },
    // Custom Worker wrapper (error page) is Cloudflare-only; Vercel uses Nitro’s Node output.
    ...(useVercelAdapter ? {} : { server: { entry: "server" as const } }),
  };

  const plugins: PluginOption[] = [
    tailwindcss(),
    viteTsconfigPaths({ projects: ["./tsconfig.json"] }),
  ];

  if (command === "build" && useVercelAdapter) {
    const { nitro } = await import("nitro/vite");
    plugins.push(...tanstackStart(tanstackPluginOptions), nitro(), viteReact());
  } else if (command === "build") {
    const { cloudflare } = await import("@cloudflare/vite-plugin");
    plugins.push(
      cloudflare({ viteEnvironment: { name: "ssr" } }),
      ...tanstackStart(tanstackPluginOptions),
      viteReact(),
    );
  } else {
    plugins.push(...tanstackStart(tanstackPluginOptions), viteReact());
  }

  return {
    define: envDefine,
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    plugins,
    server: {
      host: "::",
      port: 8080,
    },
  };
});
