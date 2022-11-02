// import { builder } from '@builder.io/react';
// import { KEY, ARTICLE_MODEL } from './constants.js';
import { getArticles } from './services.js';

export default async function getArticlePaths() {
  const articles = await getArticles();

  const paths = articles.map((article) => {
    return {
      params: {
        article: article?.url?.replace('/', '') || undefined,
      },
      props: { article, articles },
    };
  });

  if (process.env.NODE_ENV !== 'production') {
    paths.push({
      params: { article: '_' },
      props: { articles },
    });
  }

  return paths;
}
