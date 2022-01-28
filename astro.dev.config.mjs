
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    sitemap: false
  },
  pages: './src/pages-client',
  renderers: ['@astrojs/renderer-react'],
});
