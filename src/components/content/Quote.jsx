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
    type: 'longText',
    defaultValue: 'Quote from this person...',
    required: true
  },
  // {
  //   name: 'name',
  //   type: 'text',
  //   defaultValue: 'Person Name',
  // },
  // {
  //   name: 'title',
  //   type: 'text',
  //   defaultValue: 'Title',
  // },
  // {
  //   name: 'company',
  //   type: 'text',
  //   defaultValue: 'Company',
  // },
];
