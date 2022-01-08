import { builder } from '@builder.io/react';

export async function getBuilderStaticProps(modelName, context) {

  const path = `/${(context.params?.page)?.join('/') || ''}`;
  // Don't target on url and device for better cache efficiency
  const targeting = { urlPath: '_', device: '_' };

  const page = await builder
    .get(modelName, {
      userAttributes: { ...targeting, urlPath: path }
    })
    .promise();

  const pages = await builder.getAll(modelName, {
    key: 'pages:all',
    fields: 'data.url,data.navigation,data.title,data.description',
    limit: 200,
    options: {
      noTargeting: true,
    },
  });

  // If there is a Builder page for this URL, this will be an object, otherwise it'll be null
  return {
    props: {
      pages: pages.map(({ data }) => data),
      builderPage: page || null
    },
    // revalidate: true,
    notFound: !page,
  };
};
