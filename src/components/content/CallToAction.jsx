import classNames from 'classnames';
import styles from './CallToAction.module.scss';

export default function CallToAction({ 
  theme = '', 
  text = '', 
  url = '', 
  type = 'primary', 
  noArrow = false,
  openNew = false,
  className: customClassName = '',
  linkClassName: customLinkClassName = '',
}) {
  const isPrimary = type === 'primary';
  const className = classNames(
    styles.CallToAction,
    customClassName,
    { [styles.primary]: isPrimary }
  );

  const linkClassName = classNames(
    styles[type],
    isPrimary ? theme : `${theme}-text`,
    { 'button-accent': isPrimary },
    customLinkClassName,
  );

  const textClassName = classNames(
    noArrow ? styles.noArrow : ''
  );

  // the builder editor can leave empty objects
  if (!theme && !text && !url) return null;
  
  // TODO: this is only used for apply right now. need to add norel, etc. if external
  // eslint-disable-next-line react/jsx-no-target-blank
  const target = openNew ? '_blank' : '';

  return (
    <p className={className}>
      <a href={url} className={linkClassName} target={target}>
        <span className={textClassName}>{text}</span>
      </a>
    </p>
  );
}

CallToAction.inputs = [
  {
    name: 'cta',
    friendlyName: 'Call To Action',
    type: 'object',
    defaultValue: {
      theme: 'peach',
      text: 'Call to Action',
      url: '#link',
      navigation: 'primary',
      noArrow: false,
    },
    subFields: [
      {
        name: 'theme',
        type: 'text',
        enum: [
          'peach',
          'blue-medium',
          'blue-dark',
          'black',
          'blue-blue-dark-text',
          ''
        ]
      },
      {
        name: 'text',
        type: 'text',
      },
      {
        name: 'url',
        type: 'url',
      },
      {
        name: 'type',
        type: 'text',
        defaultValue: 'primary',
        enum: ['primary', 'secondary']
      },
      {
        name: 'noArrow',
        type: 'boolean',
        helperText: 'Suppress " ->" content after text',
        advanced: true,
        defaultValue: false,
      },
    ]
  }
];