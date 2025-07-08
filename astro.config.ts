import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig, fontProviders, passthroughImageService } from "astro/config";

export default defineConfig({
  site: "https://leomercier.dev",
  output: "server",
  adapter: cloudflare(),
  integrations: [playformCompress(), robotsTxt(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  devToolbar: {
    enabled: false,
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  image: {
    service: passthroughImageService(),
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  experimental: {
    clientPrerender: true,
    preserveScriptOrder: true,
    fonts: [
      {
        provider: "local",
        name: "Aktiv Grotesk",
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
        variants: [
          {
            weight: "100 800",
            style: "normal",
            src: ["./src/assets/fonts/aktivgrotesk.woff2"],
          },
        ],
      },
      {
        provider: fontProviders.google(),
        name: "Fira Code",
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
      },
    ],
  },
});
