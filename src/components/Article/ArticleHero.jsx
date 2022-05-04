import {
  Wayfinder,
  Headline,
  RichText,
  Lead,
} from '../content/Text';
import classNames from 'classnames';
import { isEmpty } from '../format.js';
import Section from '../common/Section';
import styles from './ArticleHero.module.scss';

export default function ArticleHero({ 
  wayfinder,
  lead,
  builderState,
  ...rest 
}) {
  const { data } = builderState.content;
  const { title, timestamp, description } = data;
  const date = new Date(timestamp).toLocaleDateString('en-US', { dateStyle: 'full' });
  const articleLead = isEmpty(lead) ? description : lead;
  
  return (
    <Section {...rest} className={styles.ArticleHero}>
      <div className={styles.Content}>
        {wayfinder && <Wayfinder 
          text={wayfinder} 
          className={classNames(styles.Wayfinder, 'text-accent')}
        />}

        {title && <Headline 
          as="h1" 
          text={title} 
          isPrimary={true} 
        />}

        {date && <RichText
          text={date} 
          className={classNames(styles.Date, 'text-accent')} 
        />}

        {articleLead && <Lead text={articleLead} />}

      </div>
    </Section>
  );
}

ArticleHero.config = {
  name: 'ArticleHero',
  inputs: [
    ...Section.inputs, 
    Wayfinder.input,
    Lead.input,
  ],
};
