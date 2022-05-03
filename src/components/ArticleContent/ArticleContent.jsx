import Section from '../common/Section';
import { RichContent } from '../content/Text';
import styles from './ArticleContent.module.scss';

export default function ArticleContent({ text, ...rest }) {
  return (
    <Section {...rest} className={styles.ArticleContent}>
      <RichContent className={styles.RichContent} text={text} />
    </Section>
  );
}

ArticleContent.config = {
  name: 'ArticleContent',
  inputs: [
    ...Section.inputs, 
    RichContent.input
  ],
};
