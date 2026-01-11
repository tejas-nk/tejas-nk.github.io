import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Replace 'tejas-kulkarni' with your actual GitHub username
  site: 'https://tejas-nk.github.io', 
  integrations: [tailwind()],
});