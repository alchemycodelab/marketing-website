import pkg from '@builder.io/react';
const { builder } = pkg;
builder.init('b9c103cda0f24735921c917287d4fc23');

export async function getStaticPaths() {

  const pages = await builder.getAll('page', {
    key: 'pages:all',
    fields: 'data.url',
    limit: 200,
    options: {
      noTargeting: true,
    },
  });

  const paths = pages
    .map((item) => {
      const path = item.data?.url?.replace('/', '');
      return {
        params: { 
          page: path || undefined, 
        },
      };
    });

  console.log(paths);

  return paths

}
