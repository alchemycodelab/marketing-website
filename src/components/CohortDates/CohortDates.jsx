import Section from '../common/Section';
import CohortBox from './CohortBox';
import Content from '../content/Content';
import { Wayfinder, Headline, RichText } from '../content/Text';
import styles from './CohortDates.module.scss';

export default function CohortDates({ 
  content, 
  cohorts,
  ...rest }) {
  //TODO:
  //remove hard-coded text
  //cleanup classnames vs ids
  return (
    <Section {...rest} className={styles.CohortDates}>
      <div className={styles.contentContainer}>
        <Content content={content} />
      </div>
      
      <section className={styles.boxes}>
        {cohorts.map(cohort => <CohortBox key={cohort.title} cohort={cohort}/>)}
      </section>
    </Section>
  );
}
