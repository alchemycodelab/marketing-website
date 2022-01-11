import BaseAccordion from './BaseAccordion';
import InfoCard from '../content/InfoCard';

export default function DeluxeAccordion(props) {
  return (
    <BaseAccordion {...props}>
      <Tab />
    </BaseAccordion>
  );
}

function Tab({ item, accentTheme }) {
  return <InfoCard infoCard={item.infoCard} accentTheme={accentTheme}/>;
}

DeluxeAccordion.config = {
  name: 'DeluxeAccordion',
  inputs: BaseAccordion.getInputs(InfoCard.inputs)
};



