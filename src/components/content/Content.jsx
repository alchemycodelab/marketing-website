import React from 'react';
import {
  Wayfinder,
  Headline,
  Lead,
  Title,
  RichContent,
  HeaderText
} from './Text';
import CallToAction from './CallToAction';
import classNames from 'classnames';
import styles from './Content.module.scss';

export function Content({
  content = {},
  className: customClassName = '',
  isExpressive = false,
  isPrimary = false,
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

      {headline && <Headline 
        as={isPrimary ? 'h1' : 'h2'} 
        text={headline} 
        isExpressive={isExpressive} 
        isSoft={softHeadline} 
      />}

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

  const className = classNames(styles.Content, styles.Secondary, customClassName);

  return (
    <div className={className}>
      {headline && <Title as="h3" text={headline} />}

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


export function TertiaryContent({
  content = {},
  className: customClassName = ''
}) {

  const {
    headline,
    text,
    cta,
  } = content;

  const className = classNames(styles.Content, styles.Tertiary, customClassName);

  return (
    <div className={className}>
      {headline && <HeaderText as="h4" text={headline} />}

      {text && <RichContent text={text} />}

      {cta && <CallToAction {...cta} />}
    </div>
  );
}

TertiaryContent.inputs = [
  {
    name: 'secondary content',
    type: 'object',
    defaultValue: {},
    subFields: [
      HeaderText.input,
      RichContent.input,
      ...CallToAction.inputs,
    ]
  }
];
