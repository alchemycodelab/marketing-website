import Section from '../common/Section';
import ControlBar from './ControlBar';
import { Wayfinder } from '../content/Text';
import classNames from 'classnames';
import styles from './Carousel.module.scss';

export default function Carousel({
  wayfinder,
  theme,
  alternatingTheme = theme,
  hasRightPadding = false,
  items = [],
  children,
  ...rest
}) {

  const cardsClassName = classNames(
    styles.carousel, 
    { 
      [styles.rightPadding]: hasRightPadding 
    }
  );

  return (
    <Section theme={theme} {...rest}
      tagClassName={'carousel-script'}
      className={styles.Carousel}
    >
      <div className={styles.controlBarContainer}>
        <ControlBar wayfinder={wayfinder} items={items} />
      </div>

      <div className={classNames(styles.carouselContainer, 'carousel-scroller')}>
        <ul className={cardsClassName}>
          {children}
        </ul>
      </div>
    </Section>
  );
}

Carousel.inputs = [
    ...Section.inputs,
    Wayfinder.input
];
