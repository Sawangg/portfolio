// @ts-check
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://leomercier.dev",
  //adapter: cloudflare(),
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  prefetch: true,
  integrations: [
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
