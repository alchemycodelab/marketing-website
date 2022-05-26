import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

const port = Number(process.env.PORT) || 3000;
// eslint-disable-next-line no-console
console.log('astro dev server will be on port', port);


// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap()],
  server: {
    port,
    host: true
  },
  site: 'https://www.alchemycodelab.com'
});