import Section from '../common/Section';
import { Content } from '../content/Content';
// import classNames from 'classnames';
import styles from './CenteredContent.module.scss';

export default function CenteredContent({ 
  content, 
  children,
  ...rest 
}) {
  return (
    <Section {...rest} className={styles.CenteredContent}>
      <Content content={content} />
      {children}
    </Section>
  );
}

CenteredContent.config = {
  name: 'Centered Content',
  inputs: [
    ...Section.inputs,
    ...Content.inputs,   
  ]
};
