import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <-- This must be here

export default defineConfig({
  site: 'https://tejas-nk.github.io',
  integrations: [tailwind()], // <-- This must be here
});