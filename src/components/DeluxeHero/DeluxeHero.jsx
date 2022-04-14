import Section from '../common/Section';
import { PrimaryExpressiveHeader, Lead } from '../content/Text';
import Image from '../common/Image';
import { themes } from '../../styles/themes.js';
import classNames from 'classnames';
import styles from './DeluxeHero.module.scss';


export default function DeluxeHero({ image, headline, lead, leadTheme, ...rest }) {

  return (
    <Section {...rest} className={styles.DeluxeHero}>

      <div className={styles.ImageContainer}>
        <Image image={image} maxWidth={900}/>
      </div>

      <PrimaryExpressiveHeader
        text={headline}
        className={styles.PrimaryExpressiveHeader}
      />

      <Lead className={classNames(styles.HeroLead, leadTheme)} text={lead} />

    </Section>
  );
}

DeluxeHero.config = {
  name: 'Deluxe Hero',
  inputs: [
    ...Section.inputs,
    {
      name: 'leadTheme',
      friendlyName: 'Lead Theme',
      type: 'text',
      defaultValue: 'peach',
      enum: themes
    },
    PrimaryExpressiveHeader.input,
    Lead.input,
    ...Image.inputs,
  ]
};
