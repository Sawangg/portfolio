import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig, passthroughImageService } from "astro/config";

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
  },
});
