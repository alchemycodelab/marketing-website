// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    // sitemap: false,
    site: 'https://alchemycodelab.com/'
  },
  // pages: './src/pages-prod/',
  // Enable the React renderer to support React JSX components.
  renderers: ['@astrojs/renderer-react'],
  // vite: {
  //   mode: 'production'
  // }
});
console.log('config prod');