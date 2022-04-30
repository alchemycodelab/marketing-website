import { useState, useEffect } from 'react';
import Section from '../common/Section';
import CohortBox from './CohortBox';
import { Content } from '../content/Content';
import { getCohorts } from '../../builder/services';
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

const cohorts = await getCohorts();

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
