import Section from '../common/Section';
import FadeoutCurtains from '../common/FadeoutCurtains';
import classNames from 'classnames';
import styles from './Employers.module.scss';
import Image from '../common/Image';

export default function Employers({
  theme,
  employers = [],
  ...rest 
}) {
  
  return (
    <Section theme={theme} {...rest} className={styles.Employers}>
      <ul className={styles.List}>
        {employers.map(({ image }, index) => {
          return (
            <li key={index}>
              <Image image={{ ...image, fitVertical: 'center' }}/>
            </li>
          );
        })}
      </ul>

      <FadeoutCurtains theme={theme}/>
    </Section>
  );
}

Employers.config = {
  name: 'Employers',
  inputs: [
    ...Section.inputs,
    {
      name: 'employers',
      type: 'list',
      defaultValue: [],
      subFields: Image.inputs,
    }, 
  ]
};
