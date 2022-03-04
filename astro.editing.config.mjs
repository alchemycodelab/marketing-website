console.log('editing config');
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    site: 'https://alchemy-marketing.netlify.app/builder-editing/',
    // site: 'http://localhost:3000/builder-editing/',
    sitemap: false
  },
  pages: './src/pages-client',
  dist: './dist/builder-editing',
  vite: {
    mode: 'production'
  },
  renderers: ['@astrojs/renderer-react'],
});
