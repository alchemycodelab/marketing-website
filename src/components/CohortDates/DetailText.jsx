import styles from './DetailText.module.scss';
import { RichText, RichContent, Wayfinder } from '../content/Text';

export default function DetailText({
  title,
  description,
  subtitle1,
  subtitle1Value,
  subtitle2,
  subtitle2Value,
}) {
  return (
    <article className={styles.DetailText}>
      <RichContent text={title} className={styles.title} />
      <RichText text={description} className={styles.description} />
      <section className={styles.splitInfo}>
        <section className={styles.splitInfo1}>
          <Wayfinder text={subtitle1} className={styles.subtitle} />
          <RichContent text={subtitle1Value} className={styles.subtitleValue} />
        </section>
        <section className={styles.splitInfo2}>
          <Wayfinder text={subtitle2} className={styles.subtitle} />
          <RichContent text={subtitle2Value} className={styles.subtitleValue} />
        </section>
      </section>
    </article>
  );
}
