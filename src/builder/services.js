import {
  KEY,
  ARTICLE_MODEL,
  COHORT_MODEL,
  FAQ_MODEL,
  PAGE_MODEL,
} from './constants.js';

export const builderPage = builder => async url => {
  const page = await builder.get(PAGE_MODEL, { url }).promise();
  return page || null;
}

async function get(url) {
  const response = await fetch(url);
  const body = await response.json();
  if (!response.ok) throw body;
  return body.results;
}

const API_URL = 'https://cdn.builder.io/api/v2/content';
const API_KEY = `?apiKey=${KEY}`;
const getModelUrl = model => `${API_URL}/${model}${API_KEY}`;

const COHORT_URL = getModelUrl(COHORT_MODEL);

export async function getCohorts() {
  const results = await get(COHORT_URL);
  return results.map(({ name, data }) => ({ ...data, name }));
}

const FAQ_OPTIONS = '&limit=0&fields=data.category.value.name,data.question,data.answer&includeRefs=true';
const FAQ_URL = `${getModelUrl(FAQ_MODEL)}${FAQ_OPTIONS}`;

export async function getFAQs() {
  const results = await get(FAQ_URL);

  const categoryMap = new Map();
  for (let { data } of results) {
    const { question, answer, category } = data;

    const topic = category.value.name;
    const hasTopic = categoryMap.has(topic);

    const faqs = hasTopic ? categoryMap.get(topic) : [];
    faqs.push({ question, answer });
    if (!hasTopic) categoryMap.set(topic, faqs);
  }

  return [...categoryMap.entries()].map(([topic, faqs]) => ({ topic, faqs }));
}


const ARTICLES_OPTIONS = '&limit=0' +
  '&fields=data.url,data.title,data.description,data.timestamp,data.imageUrl' +
  '&sort.data.timestamp=-1';
const ARTICLES_URL = `${getModelUrl(ARTICLE_MODEL)}${ARTICLES_OPTIONS}`;

export async function getArticles() {
  const results = await get(ARTICLES_URL);
  return results.map(({ data }) => data);
}

const ARTICLE_OPTIONS = '&limit=1&query.data.url=';
const ARTICLE_URL = `${getModelUrl(ARTICLE_MODEL)}${ARTICLE_OPTIONS}`;

export async function getArticle(url) {
  const [article] = await get(ARTICLE_URL + url);
  return article || null;
}

