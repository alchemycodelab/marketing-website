import { getPages } from './services.js';

export default async function getStaticPaths() {
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
