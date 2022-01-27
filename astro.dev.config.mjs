
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    sitemap: false
  },
  renderers: ['@astrojs/renderer-react'],
  vite: {
    mode: 'development'
  }
});
