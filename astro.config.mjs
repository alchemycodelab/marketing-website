console.log('prod config');
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    sitemap: false,
    // site: 'https://alchemycodelab.com/'
  },
  renderers: ['@astrojs/renderer-react'],
  // vite: {
  //   mode: 'production'
  // }
});