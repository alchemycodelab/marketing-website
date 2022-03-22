import { Content } from '../content/Content';
import Section from '../common/Section';
import styles from './SmallHero.module.scss';

export default function SmallHero({ content, ...rest }) {
  return (
    <Section {...rest} className={styles.SmallHero}>
      <Content className={styles.Content} content={content} isPrimary={true} isExpressive={true} />
    </Section>
  );
}

SmallHero.config = {
  name: 'SmallHero',
  inputs: [...Section.inputs, ...Content.inputs],
};
