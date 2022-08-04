import builder from '@builder.io/react';
import { KEY, PAGE_MODEL } from './constants.js';

export const builderPages = (builder) => async () => {
  const resp = await builder.getAll(PAGE_MODEL, {
    fields:
      'name, data.url,data.navigation,data.title,data.description,data.noIndex,data.canonicalLink',
    limit: 1000,
    options: {
      noTargeting: true,
      includeUnpublished: import.meta.env.DEV,
    },
  });

  return resp.map(({ name, data }) => ({ name, ...data }));
};

export default async function getStaticPaths() {
  builder.init(KEY);
  const getPages = builderPages(builder);
  const pages = await getPages();

  const paths = pages.map((page) => {
    return {
      params: {
        page: page?.url?.replace('/', '') || undefined,
      },
      props: { page, pages },
    };
  });

  return paths;
}
