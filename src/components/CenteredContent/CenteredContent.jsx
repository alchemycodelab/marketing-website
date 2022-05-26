import Section from '../common/Section';
import { Content } from '../content/Content';
import classNames from 'classnames';
import styles from './CenteredContent.module.scss';

export default function CenteredContent({ 
  content, 
  children,
  leftAlign = false,
  ...rest 
}) {
  const className = classNames(
    styles.CenteredContent,
    { [styles.LeftAlign]: leftAlign },
  );
  
  return (
    <Section {...rest} className={className}>
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
