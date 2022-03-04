console.log('editing config');
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    // site: 'https://alchemy-marketing.netlify.app/builder-editing/',
    sitemap: false
  },
  dist: './dist/builder-editing',
  vite: {
    mode: 'production'
  },
  renderers: ['@astrojs/renderer-react'],
});
