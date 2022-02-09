console.log('dev config');
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    sitemap: false
  },
  pages: './src/pages-client',
  // pages: './src/pages',
  renderers: ['@astrojs/renderer-react'],
});
