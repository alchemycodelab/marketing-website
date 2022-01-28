import Section from '../common/Section';
import ImageContent from '../ImageContent/ImageContent.jsx';
import Accordion from '../Accordion/Accordion';
import styles from './Scholarships.module.scss';

export default function Scholarships({ 
  intro,
  scholarships,
  ...rest }) {
  
  return (
    <Section {...rest} className={styles.Scholarships}>
      
      <div className={styles.imageContentContainer}>
        <ImageContent
          {...intro}
          enforceAspectRation={true}
        />
      </div>

      <Accordion
        {...scholarships}
      />
    </Section>
  );
}

Scholarships.config = {
  name: 'Scholarships',
  inputs: [
    ...Section.inputs,
    {
      name: 'intro',
      type: 'object',
      defaultValue: {},
      subFields: ImageContent.config.inputs
    },
    {
      name: 'scholarships',
      type: 'object',
      defaultValue: {},
      subFields: Accordion.config.inputs
    }
  ]
};
