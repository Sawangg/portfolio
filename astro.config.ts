// import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders, passthroughImageService } from "astro/config";

export default defineConfig({
  // adapter: cloudflare(),
  fonts: [
    {
      cssVariable: "--font-univers-next",
      fallbacks: [
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      name: "Univers Next",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Univers Next Pro UltraLight.woff2"],
            style: "normal",
            weight: 100,
          },
          {
            src: ["./src/assets/fonts/Univers Next Pro Thin.woff2"],
            style: "normal",
            weight: 200,
          },
          {
            src: ["./src/assets/fonts/Univers Next Pro Regular.woff2"],
            style: "normal",
            weight: 400,
          },
          {
            src: ["./src/assets/fonts/Univers Next Pro Medium.woff2"],
            style: "normal",
            weight: 500,
          },
          {
            src: ["./src/assets/fonts/Univers Next Pro Bold.woff2"],
            style: "normal",
            weight: 700,
          },
          {
            src: ["./src/assets/fonts/Univers Next Pro Heavy.woff2"],
            style: "normal",
            weight: 800,
          },
          {
            src: ["./src/assets/fonts/Univers Next Pro Black.woff2"],
            style: "normal",
            weight: 900,
          },
        ],
      },
      provider: fontProviders.local(),
    },
  ],
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
    service: passthroughImageService(),
  },
  integrations: [sitemap({ namespaces: { video: false } })],
  output: "static",
  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
  },
  security: {
    csp: {
      directives: [
        "default-src 'none'",
        "img-src 'self' https: blob: data:",
        "media-src 'self' https: blob: data:",
        "frame-src 'self'",
        "font-src 'self'",
        "connect-src 'self'",
        "base-uri 'none'",
        "form-action 'self'",
        "upgrade-insecure-requests",
      ],
      scriptDirective: {
        resources: ["'self'"],
        strictDynamic: true,
      },
      styleDirective: {
        resources: ["'self'"],
      },
    },
  },
  site: "https://leomercier.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
