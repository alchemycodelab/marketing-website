import Section from '../common/Section';
import { Content } from '../content/Content';
import { StrongSmallText, SmallText } from '../content/Text';
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
        {endorsements.map(({ image, title, source }, index) => {
          return (
            <li key={index}>
              <div className={styles.Image}>
                <Image image={{ ...image, fitVertical: 'center' }} maxWidth={125}/>
              </div>
              <SmallText text={title} as="h3"/>
              <StrongSmallText text={source}/>
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
    {
      name: 'endorsements',
      type: 'list',
      defaultValue: [],
      subFields: [
        ...Image.inputs,
        {
          ...SmallText.input,
          name: 'title',
          defaultValue: 'Endorsement title',
        },
        {
          ...StrongSmallText.input,
          name: 'source',
          defaultValue: 'Endorsement source',
        },
      ]
    }, 
  ]
};
