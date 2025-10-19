// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://tommoulard.github.io',
	base: '/ambre-du-rosel/',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});