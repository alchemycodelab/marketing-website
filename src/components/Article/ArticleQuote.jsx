import Section from '../common/Section';
import Quote from '../content/Quote';
import Attribution from '../content/Attribution';
import styles from './ArticleQuote.module.scss';

export default function ArticleQuote({ 
  text, 
  name,
  title,
  company,
  ...rest 
}) {

  return (
    <Section {...rest} className={styles.ArticleQuote}>
      <div className={styles.Container}>
        <Quote text={text}/>
        <br/>
        <Attribution 
          name={name}
          title={title}
          company={company} 
        />
      </div>
    </Section>
  );
}

ArticleQuote.config = {
  name: 'ArticleQuote',
  inputs: [
    ...Section.inputs, 
    ...Quote.inputs,
    ...Attribution.inputs,
  ],
};
