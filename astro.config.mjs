import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { VitePWA } from "vite-plugin-pwa";
import viteCompression from "vite-plugin-compression";
import { imagetools } from 'vite-imagetools';
import purgecss from '@fullhuman/postcss-purgecss';
import critical from 'rollup-plugin-critical';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: true,
  integrations: [tailwind(), sitemap()],
  adapter: cloudflare(),
  output: "hybrid",
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
        manifest: {
          name: 'Astro App',
          short_name: 'AstroApp',
          description: 'An awesome Astro application',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
      }),
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
      }),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
      }),
      imagetools(),
      critical({
        criticalBase: 'dist/',
        criticalUrl: '',
        criticalPages: [
          { uri: '', template: 'index' }
        ],
        criticalConfig: {},
      }),
    ],
    build: {
      cssMinify: "lightningcss",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      },
      staticDir: "/dist/_astro/",  // Corrección de la propiedad
      postcss: {
        plugins: [
          purgecss({
            content: ['./src/**/*.astro', './src/**/*.html'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
          }),
        ],
      },
    },
    ssr: {
      noExternal: ["path-to-regexp"],
    },
  },
});
//optimize v3 tests
