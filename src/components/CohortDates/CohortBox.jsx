import CallToAction from '../content/CallToAction';
import { StatCaption, HeaderText } from '../content/Text';
import classNames from 'classnames';
import styles from './CohortBox.module.scss';

export default function CohortBox({ cohort }) {
  //TODO: add another prop to CTA for dark blue on hover
  const { name, suggestion, startDate, endDate } = cohort;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const month = start.toLocaleString('en-US', { month: 'short' }).slice(0, 2);
  const year = start.toLocaleString('en-US', { year: '2-digit' });

  return (
    <article className={classNames('blue', styles.CohortBox)}>
      <div className={classNames(styles.backdrop, styles.month)}>
        {month}
      </div>
      <div className={classNames(styles.backdrop, styles.year)}>
        {year}
      </div>
      <div className={styles.detail}>
        <header>{name}</header>
        <p>{suggestion}</p>
      </div>
      <CohortDate name="Start" date={start} className={styles.start}/>
      <CohortDate name="End" date={end} className={styles.end}/>
      <CallToAction 
        type="secondary" 
        theme="blue-dark"
        text="Apply Now" 
        url="https://office.alchemycodelab.com/apply.html"
        target="_blank"
        className={styles.cta} 
        linkClassName={styles.ctaLink}
      /> 
    </article>
  );
}

function Backdrop({ datePart, className }){
  return (
    <div className={classNames(styles.backdrop, className)}>
      {datePart}
    </div>
  );
}

function CohortDate({ name, date, className }) {
  
  const display = date.toLocaleDateString('en-us', { 
    year: '2-digit', 
    month: '2-digit', 
    day: '2-digit' 
  });
  
  return (
    <div className={classNames(styles.date, className)}>
      <StatCaption text={name}></StatCaption>
      <HeaderText text={display} />
    </div>
  );
}
