import { HeaderText } from '../content/Text';
import BaseAccordion from './BaseAccordion';
import styles from './Accordion.module.scss';

export default function Accordion(props) {
  return (
    <BaseAccordion {...props} contentClassName={styles.Content}>
      <Tab />
    </BaseAccordion>
  );
}

function Tab({ item, textTheme }) {

  return (
    <div className={styles.Tab}>
      <HeaderText text={item.heading} className={`${textTheme}-text`}/>
    </div>
  );
}

Accordion.config = {
  name: 'Accordion',
  inputs: BaseAccordion.getInputs([HeaderText.input])
};



