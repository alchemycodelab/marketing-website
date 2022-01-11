import classNames from 'classnames';
import styles from './CallToAction.module.scss';

export default function CallToAction({ theme = '', text = '', url = '', type = 'primary' }) {
  const isPrimary = type === 'primary';
  const className = classNames(
    styles[type],
    isPrimary ? theme : `${theme}-text`,
    { 'button-accent': isPrimary },
  );

  // the builder editor can leave empty objects
  if (!theme && !text && !url) return null;

  return (
    <p className={styles.CallToAction}>
      <a href={url} className={className}>
        {text}
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
    },
    subFields: [
      {
        name: 'theme',
        type: 'text',
        enum: [
          'peach',
          'blue', 
          'blue-dark',
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
    ]
  }
];