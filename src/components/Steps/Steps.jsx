import Section from '../common/Section';
import { Content, SecondaryContent } from '../content/Content';
import styles from './Steps.module.scss';

export default function Steps({ 
  content,
  steps = [],
  ...rest }) {

  console.log(steps);
  return (
    <Section {...rest} className={styles.Steps}>
      <div className={styles.contentContainer}>
        <Content content={content} />
      </div>
      
      <ol className={styles.steps}>
        {steps.map((step, index) => {
          return (
            <Step 
              key={index} 
              number={index + 1} 
              step={step}/>
          );
        })}
      </ol>
    </Section>
  );
}

function Step({ step }) {
  return (
    <li className={styles.step}>
      <SecondaryContent content={step.content} />
    </li>
  );
}


Steps.config = {
  name: 'Steps',
  inputs: [
    ...Section.inputs,
    ...Content.inputs,
    {
      name: 'steps',
      type: 'list',
      defaultValue: [],
      subFields: [
        ...Content.inputs,
      ]
    },
  ]
};
