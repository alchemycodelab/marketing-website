import { Content } from '../content/Content';
import { HeaderText, RichText } from '../content/Text';
import styles from './FAQs.module.scss';

export default function FAQs({ category }) {
  const { topic, faqs } = category;

  return (
    <div className={styles.FAQ}>
      <Content content={{ headline: topic }}/>

      {faqs.map((faq, i) => (
        <FAQ key={i} {...faq}/>
      ))}
    </div>
  );
}

function FAQ({ question, answer }) {
  return (
    <details>
      <summary>
        <HeaderText text={question}/>
      </summary>
      <RichText text={answer}/>
    </details>
  );
}
