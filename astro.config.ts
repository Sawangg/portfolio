import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders, passthroughImageService } from "astro/config";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  adapter: cloudflare(),
  devToolbar: {
    enabled: false,
  },
  experimental: {
    staticImportMetaEnv: true,
    clientPrerender: true,
    fonts: [
      {
        cssVariable: "--font-aktiv-grotesk",
        fallbacks: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        name: "Aktiv Grotesk",
        provider: "local",
        variants: [
          {
            src: ["./src/assets/fonts/aktivgrotesk.woff2"],
            style: "normal",
            weight: "100 800",
          },
        ],
      },
      {
        cssVariable: "--font-fira-code",
        fallbacks: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        name: "Fira Code",
        provider: fontProviders.google(),
      },
    ],
    preserveScriptOrder: true,
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
    service: passthroughImageService(),
  },
  integrations: [playformCompress(), robotsTxt(), sitemap({ namespaces: { video: false } })],
  output: "server",
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },
  site: "https://leomercier.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
