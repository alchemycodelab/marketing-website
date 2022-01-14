import config from './astro.config.mjs';

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  ...config,
  buildOptions: {
    sitemap: false
  },
  dist: './dist/builder-editing',
  vite: {
    mode: 'editing'
  }
});
