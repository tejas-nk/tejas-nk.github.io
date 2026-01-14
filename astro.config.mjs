import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'; // Added for Google Search

export default defineConfig({
  // Your GitHub Pages URL
  site: 'https://tejas-nk.github.io',
  
  // order of integrations doesn't usually matter, but keeping them clean
  integrations: [
    tailwind(), 
    sitemap()
  ],
});