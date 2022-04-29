import { useState, useEffect } from 'react';
import Section from '../common/Section';
import CohortBox from './CohortBox';
import { Content } from '../content/Content';
import styles from './CohortDates.module.scss';

export function CohortDates({ 
  content = {}, 
  cohorts = [],
  ...rest }) {

  return (
    <Section {...rest} className={styles.CohortDates}>
      <div className={styles.contentContainer}>
        <Content content={content} />
      </div>
      
      <section className={styles.boxes}>
        {cohorts.map(cohort => <CohortBox key={cohort.name} cohort={cohort}/>)}
      </section>
    </Section>
  );
}

const url = 'https://cdn.builder.io/api/v2/content/cohort?apiKey=b9c103cda0f24735921c917287d4fc23';
const response = await fetch(url);
const { results } = await response.json();
const cohorts = results.map(({ name, data }) => ({ ...data, name }));

export default function CohortDatesContainer(props) {
  return <CohortDates cohorts={cohorts} {...props}/>;
}

CohortDatesContainer.config = {
  name: 'Cohort Dates',
  inputs: [
    ...Section.inputs,
    ...Content.inputs,
  ]
};
