import React from 'react';
import {
  Wayfinder,
  Headline,
  Lead,
  RichContent,
} from './Text';
import CallToAction from './CallToAction';
import classNames from 'classnames';
import styles from './Content.module.scss';

export default function Content({
  content = {},
  className: customClassName = '',
  isPrimary = false
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

      {headline && <Headline text={headline} isPrimary={isPrimary} isSoft={softHeadline} />}

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
