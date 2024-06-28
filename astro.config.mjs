import cloudflare from "@astrojs/cloudflare"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	adapter: cloudflare(),
	output: "hybrid",
	vite: {
		build: {
			cssMinify: "lightningcss",
			// @ts-ignore
			static: "/dist/_astro/",
		},
		ssr: {
			noExternal: ["path-to-regexp"],
		},
	},
})
