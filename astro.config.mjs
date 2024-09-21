// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://leomercier.dev",
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  prefetch: true,
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
    playformCompress({
      CSS: false,
    }),
    sitemap(),
    robotsTxt(),
  ],
});
