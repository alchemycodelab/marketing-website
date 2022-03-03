import Section from '../common/Section';
import { Content } from '../content/Content';
// import classNames from 'classnames';
import styles from './Endorsements.module.scss';
import Image from '../common/Image';

export default function Endorsements({
  content,  
  endorsements = [],
  ...rest 
}) {
  return (
    <Section {...rest} className={styles.Endorsements}>
      <Content className={styles.Content} content={content} />
      <ul className={styles.List}>
        {endorsements.map(({ image, title, source }) => {
          return (
            <li>
              <div className={styles.Image}>
                <Image image={image}/>
              </div>
              <h3>{title}</h3>
              <p>{source}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

Endorsements.config = {
  name: 'Endorsements',
  inputs: [
    ...Section.inputs,
    ...Content.inputs,
    // TODO: endorsements   
  ]
};
