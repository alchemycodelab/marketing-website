import classNames from 'classnames';
import styles from './Quote.module.scss';

export default function Quote({
  text,
  className: customClassName = ''
}) {

  const className = classNames(
    styles.Quote,
    customClassName
  );

  return (
    <blockquote className={className}>
      {text}
    </blockquote>
  );
}

Quote.inputs = [
  {
    name: 'text',
    friendlyName: 'quote',
    type: 'longText',
    defaultValue: 'Quote from this person...',
    required: true
  },
];
