import { RichText } from '../content/Text';
import classNames from 'classnames';
import styles from './Attribution.module.scss';

const formatPosition = (title, company) => {
  if(!title && !company) return '';
  if(!title) return company;
  if(!company) return title;
  return `${title} at ${company}`;
};

export default function Attribution({
  name,
  title,
  company,
  className: customClassName = ''
}) {

  const className = classNames(
    styles.Attribution,
    customClassName
  );

  const position = formatPosition(title, company)

  return (
    <div className={className}>
      {name && <RichText text={name} />}
      {position && <RichText text={position} className="black-65-text" />}
    </div>
  );
}

Attribution.inputs = [
  {
    name: 'name',
    type: 'text',
    defaultValue: 'Person Name',
  },
  {
    name: 'title',
    type: 'text',
    defaultValue: 'Title',
  },
  {
    name: 'company',
    type: 'text',
    defaultValue: 'Company',
  },
];
