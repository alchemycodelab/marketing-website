import { defineConfig } from 'astro/config'
import react from '@astrojs/react';

console.log('dev config');

export default defineConfig({
  server: {
    port: Number(process.env.PORT || 3000),
    hostname: process.env.PORT ? '0.0.0.0' : 'localhost'
  },
  // pages: './src/pages-client',
  // pages: './src/pages',
  integrations: [
    react(),
  ],
})


