const PAGE_MODEL_NAME = 'page';

export const builderPage = builder => async url => {
  const page = await builder.get(PAGE_MODEL_NAME, { url }).promise();
  return page || null;
}

const COHORT_MODEL_NAME = 'cohort';

export const builderCohorts = builder => async () => {
  const res = await builder.getAll(COHORT_MODEL_NAME);
  return res.map(({ name, data }) => ({ ...data, name }));
}
