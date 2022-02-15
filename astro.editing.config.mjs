console.log('editing config');
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    sitemap: false
  },
  dist: './dist/builder-editing',
  pages: './src/pages-client/',
  vite: {
    mode: 'production'
  },
  renderers: ['@astrojs/renderer-react'],
});
