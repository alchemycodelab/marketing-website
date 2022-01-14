import DetailText from './DetailText';
import CallToAction from '../content/CallToAction';
import { Title, RichText, StatCaption, HeaderText } from '../content/Text';
import classNames from 'classnames';
import styles from './CohortBox.module.scss';

export default function CohortBox({ cohort }) {
  //TODO:
  // add another prop to CTA for dark blue on hover
  // check that all text components are being correctly used

  const { title, deadline, startDate, endDate } = cohort;
  const start = new Date(startDate);
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
        <header>{title}</header>
        <p>{deadline}</p>
      </div>
      <div className={classNames(styles.date, styles.start)}>
        <StatCaption text="Start" />
        <HeaderText text={startDate} />
      </div>
      <div className={classNames(styles.date, styles.end)}>
        <StatCaption text="End"></StatCaption>
        <HeaderText text={endDate} />
      </div>
      <CallToAction 
        type="secondary" 
        theme="blue-dark"
        text="Apply Now" 
        className={styles.cta} 
        linkClassName={styles.ctaLink}
      /> 
    </article>
  );
}
