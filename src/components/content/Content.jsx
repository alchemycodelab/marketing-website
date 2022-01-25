import React from 'react';
import {
  Wayfinder,
  Headline,
  Lead,
  Title,
  RichContent,
} from './Text';
import CallToAction from './CallToAction';
import classNames from 'classnames';
import styles from './Content.module.scss';

export function Content({
  content = {},
  className: customClassName = '',
  isExpressive = false,
}) {

  const {
    wayfinder,
    headline,
    softHeadline = false,
    lead,
    text,
    cta,
  } = content;

  const className = classNames(styles.Content, customClassName);

  return (
    <div className={className}>
      {wayfinder && <Wayfinder text={wayfinder} className="text-accent" />}

      {headline && <Headline text={headline} isExpressive={isExpressive} isSoft={softHeadline} />}

      {lead && <Lead text={lead} />}

      {text && <RichContent text={text} />}

      {cta && <CallToAction {...cta} />}
    </div>
  );
}


Content.inputs = [
  {
    name: 'content',
    type: 'object',
    defaultValue: {},
    subFields: [
      Wayfinder.input,
      Headline.input,
      {
        name: 'softHeadline',
        helperText: 'Use normal font-weight on headline text',
        type: 'boolean',
        advanced: true,
        defaultValue: false,
      },
      Lead.input,
      RichContent.input,
      ...CallToAction.inputs,
    ]
  }
];

export function SecondaryContent({
  content = {},
  className: customClassName = ''
}) {

  const {
    headline,
    text,
    cta,
  } = content;

  const className = classNames(styles.Content, customClassName);

  return (
    <div className={className}>
      {headline && <Title text={headline} />}

      {text && <RichContent text={text} />}

      {cta && <CallToAction {...cta} />}
    </div>
  );
}

SecondaryContent.inputs = [
  {
    name: 'secondary content',
    type: 'object',
    defaultValue: {},
    subFields: [
      Headline.input,
      RichContent.input,
      ...CallToAction.inputs,
    ]
  }
];
