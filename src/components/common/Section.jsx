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
    <Tag className={classNames(styles.Tag, theme, tagClassName)}>

      {id && <div id={id} className={styles.Id}></div>}
      
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
    defaultValue: 'pink',
    enum: themes
  },
  {
    name: 'id',
    friendlyName: 'Hash Tag Link Id',
    type: 'text',
    helperText: 
      `Add a hash tag id for linking directly to this section`,
    regex: {
      pattern: "^[a-z|0-9|-]*$",
      message: "Id can only contain lower case letters, numbers, and hyphens (kebob-case)"
    }
  }
];
