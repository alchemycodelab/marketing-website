import { defineConfig } from 'astro/config'
import react from '@astrojs/react';

console.log('dev config');

const PORT = Number(process.env.PORT || 3000);
console.log('port is', PORT);

export default defineConfig({
  server: {
    port: PORT,
    hostname: process.env.PORT ? '0.0.0.0' : 'localhost'
  },
  // pages: './src/pages-client',
  // pages: './src/pages',
  integrations: [
    react(),
  ],
})


