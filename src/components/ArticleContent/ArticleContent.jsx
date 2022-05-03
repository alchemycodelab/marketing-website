import Section from '../common/Section';
import { RichContent } from '../content/Text';
import classNames from 'classnames';
import styles from './ArticleContent.module.scss';

export default function ArticleContent({ 
  text, 
  bottomPadding = false,
  ...rest 
}) {
  const className = classNames(
    styles.ArticleContent,
    { [styles.bottomPadding]: bottomPadding },
  );

  return (
    <Section {...rest} className={className}>
      <RichContent className={styles.RichContent} text={text} />
    </Section>
  );
}

ArticleContent.config = {
  name: 'ArticleContent',
  inputs: [
    ...Section.inputs, 
    RichContent.input,
    {
      name: 'bottomPadding',
      type: 'boolean',
      advanced: true,
    },
  ],
};
