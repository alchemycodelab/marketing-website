import { defineConfig } from 'astro/config'
import react from '@astrojs/react';

console.log('prod config');

export default defineConfig({
  // pages: './src/pages-client',
  // pages: './src/pages',
  integrations: [
    react(),
  ],
})


