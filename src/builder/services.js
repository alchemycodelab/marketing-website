const PAGE_MODEL_NAME = 'page';

export const builderStaticPaths = builder => async () => {
  builder.init('b9c103cda0f24735921c917287d4fc23');

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

export const builderPage = builder => async url => {
  const page = await builder.get(PAGE_MODEL_NAME, { url }).promise();
  return page || null;
}

const COHORT_MODEL_NAME = 'cohort';

export const builderCohorts = builder => async () => {
  const res = await builder.getAll(COHORT_MODEL_NAME);
  return res.map(({ name, data }) => ({ ...data, name }));
}
