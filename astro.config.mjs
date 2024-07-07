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
  prerender: {
    routes: [
      '/',
      '/routines/index',
      '/favicon.png',
      '/routines/0',
      '/routines/1',
      '/routines/2',
      '/routines/3',
      '/routines/4',
      '/routines/5',
      '/routines/6',
      '/routines/7',
      '/routines/8',
    ],
  },
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
          { uri: '', template: 'index' },
          { uri: 'routines/index', template: 'routines/index' },
          { uri: 'routines/0', template: 'routines/0' },
          { uri: 'favicon.png', template: 'favicon', critical: true }, 
          { uri: 'routines/1', template: 'routines/1' },
          { uri: 'routines/2', template: 'routines/2' },
          { uri: 'routines/3', template: 'routines/3' },
          { uri: 'routines/4', template: 'routines/4' },
          { uri: 'routines/5', template: 'routines/5' },
          { uri: 'routines/6', template: 'routines/6' },
          { uri: 'routines/7', template: 'routines/7' },
          { uri: 'routines/8', template: 'routines/8' },
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
//optimize test 4