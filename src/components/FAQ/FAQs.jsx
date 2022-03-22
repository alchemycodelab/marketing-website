import Section from '../common/Section';
import { Content } from '../content/Content';
import { HeaderText, RichText } from '../content/Text';

import styles from './FAQ.module.scss';
export default function FAQs({ faqs }) {
  return (
    <div className={styles.FAQ}>
      <Content content={{ headline: faqs.topic }} />
      {faqs.questions.map((q) => (
        <FAQ {...q} />
      ))}
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <details>
      <summary>
        <HeaderText text={question} />
      </summary>
      <RichText text={answer} />
    </details>
  );
}
