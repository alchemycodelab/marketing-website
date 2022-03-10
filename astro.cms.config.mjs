console.log('cms config');
// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    site: 'https://alchemy-marketing-cms.netlify.app/',
    // site: 'http://localhost:3000/builder-editing/',
    sitemap: false
  },
  pages: './src/pages-client',
  // dist: './dist/builder-editing',
  vite: {
    mode: 'production'
  },
  renderers: ['@astrojs/renderer-react'],
});
