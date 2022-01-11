import React from 'react';
import Section from '../common/Section';
import Content from '../content/Content';
import { IllustrationCaption } from '../content/Text';
import Image from '../common/Image';
import { themes } from '../../styles/themes.js';
import classNames from 'classnames';
import styles from './IllustrativeExplainer.module.scss';


export default function IllustrativeExplainer({
  content,
  illustrationTheme = 'pink',
  illustrationBorderColor = 'gold-primary',
  illustrations = [],
  ...rest
}) {

  return (
    <Section {...rest} className={styles.IllustrativeExplainer}>

      <div className={styles.contentContainer}>
        <Content content={content} />
      </div>

      {illustrations.map(({ text, image }, i) => (
        <section key={i}
          className={classNames(styles.tile, illustrationTheme)}
          xstyle={{ borderColor: `var(--${illustrationBorderColor})` }}
        >
          <Image image={image} />
          <IllustrationCaption text={text} className={styles.IllustrationCaption} />
        </section>
      ))}

    </Section>
  );
}

IllustrativeExplainer.config = {
  name: 'Illustrative Explainer',
  inputs: [
    ...Section.inputs,
    {
      name: 'illustrationTheme',
      type: 'text',
      defaultValue: 'pink',
      enum: themes
    },
    {
      name: 'illustrationBorderColor',
      type: 'text',
      defaultValue: 'gold-primary',
      enum: themes
    },
    ...Content.inputs,
    {
      name: 'illustrations',
      type: 'list',
      defaultValue: [],
      subFields: [
        ...Image.inputs,
        {
          ...IllustrationCaption.input,
          name: 'caption',
          defaultValue: 'Illustration caption',
        },
      ]
    },
  ]
};
