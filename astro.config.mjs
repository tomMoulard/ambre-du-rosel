// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://du-rosel-de-saint-germain-avocate.fr',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});