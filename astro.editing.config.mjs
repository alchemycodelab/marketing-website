// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    sitemap: false
  },
  dist: './dist/builder-editing',
  vite: {
    mode: 'development'
  },
  renderers: ['@astrojs/renderer-react'],
});
