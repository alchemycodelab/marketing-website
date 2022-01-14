import config from './astro.config.mjs';

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  ...config,
  buildOptions: {
    sitemap: false
  },
  vite: {
    mode: 'development'
  }
});
