import { Builder } from '@builder.io/react';
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
  headline, 
  lead,
  builderState,
  ...rest 
}) {
  const { name, data } = builderState.content;
  const { timestamp, metaDescription } = data;
  const date = new Date(timestamp).toLocaleDateString('en-US', { dateStyle: 'full' });
  const articleLead = isEmpty(lead) ? metaDescription : lead;
  // console.dir(Builder);
  return (
    <Section {...rest} className={styles.ArticleHero}>
      <div className={styles.Content}>
        {wayfinder && <Wayfinder 
          text={wayfinder} 
          className={classNames(styles.Wayfinder, 'text-accent')}
        />}

        {name && <Headline 
          as="h1" 
          text={name} 
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
    Headline.input,
    Lead.input,
  ],
};
