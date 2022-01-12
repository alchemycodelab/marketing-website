import pkg from '@builder.io/react';
const { builder } = pkg;
builder.init('b9c103cda0f24735921c917287d4fc23');

const MODEL_NAME = 'page';

export async function getStaticPaths() {

  const resp = await builder.getAll(MODEL_NAME, {
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

  // console.log(paths);//.map(p => p.params));

  return paths;
}

export async function getPage(url) {
  
  // Don't target on url and device for better cache efficiency
  const targeting = { urlPath: '_', device: '_' };

  const page = await builder.get(MODEL_NAME, {
    userAttributes: { 
      ...targeting, 
      urlPath: url 
    }
  }).promise();

  // console.log(page);
    
  return page || null;
}

