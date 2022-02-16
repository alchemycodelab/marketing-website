console.log('dev config');
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    sitemap: false
  },
  devOptions: {
    port: Number(process.env.PORT || 3000)
  },
  pages: './src/pages-client',
  // pages: './src/pages',
  renderers: ['@astrojs/renderer-react'],
});
