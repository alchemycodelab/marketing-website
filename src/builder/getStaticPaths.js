import builder from '@builder.io/react';
import KEY from './key.js';

const PAGE_MODEL_NAME = 'page';

export default async function getStaticPaths() {

  builder.init(KEY);

  const resp = await builder.getAll(PAGE_MODEL_NAME, {
    key: 'pages:all',
    fields: 'data.url,data.navigation,data.title,data.description',
    limit: 200,
    options: {
      noTargeting: true,
    },
  });

  const pages = resp.map(item => item.data);

  const paths = pages
    .map(page => {
      return {
        params: {
          page: page?.url?.replace('/', '') || undefined,
        },
        props: { page, pages }
      };
    });

  return paths;
}
