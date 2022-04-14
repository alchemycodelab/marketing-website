import classNames from 'classnames';
import { themes } from '../../styles/themes.js';
import styles from './Section.module.scss';

export default function Section({
  tag: Tag = 'section',
  theme,
  className,
  id,
  tagClassName = '',
  children
}) {

  return (
    <Tag id={id} className={classNames(theme, tagClassName)}>
      <div className={classNames(styles.Section, className)}>
        {children}
      </div>
    </Tag>
  );
}

Section.inputs = [
  {
    name: 'theme',
    type: 'text',
    defaultValue: '',
    enum: themes
  },
];
