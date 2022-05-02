import builder from '@builder.io/react';
import { KEY, ARTICLE_MODEL } from './constants.js';

export default async function getArticlePaths() {

  builder.init(KEY);

  const resp = await builder.getAll(ARTICLE_MODEL, {
    fields: 'data.url,data.title,data.description',
    limit: 1000,
    options: {
      noTargeting: true,
    },
  });

  const articles = resp.map(item => item.data);

  const paths = articles
    .map(article => {
      return {
        params: {
          article: article?.url?.replace('/', '') || undefined,
        },
        props: { article, articles }
      };
    });

  if (process.env.NODE_ENV === 'development') {
    paths.push({
      params: { article: '_' },
      props: { articles }
    });
  }

  return paths;
}
