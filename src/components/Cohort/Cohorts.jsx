import { useContext } from 'react';
import GlobalContext from '../GlobalContext.js';
import Section from '../common/Section';
import CohortBox from './CohortBox';
import Content from '../content/Content';
import styles from './Cohorts.module.scss';

export default function Cohorts({ 
  content = {}, 
  cohorts = [],
  ...rest }) {
  
  // const { cohorts = [] } = useContext(GlobalContext);
  
  return (
    <Section {...rest} className={styles.Cohorts}>
      <div className={styles.contentContainer}>
        <Content content={content} />
      </div>
      
      <section className={styles.boxes}>
        {cohorts.map(cohort => <CohortBox key={cohort.name} cohort={cohort}/>)}
      </section>
    </Section>
  );
}

Cohorts.config = {
  name: 'Cohorts',
  inputs: [
    ...Section.inputs,
    ...Content.inputs,
  ]
};
