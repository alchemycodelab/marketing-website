import InfoCard from './InfoCard';
import classNames from 'classnames';
import styles from './InfoCards.module.scss';

export default function InfoCards({
  infoCards = [],
  accentTheme,
  cardClassName = '',
}) {

  const className = classNames(styles.InfoCards);

  return (
    <ul className={className}>
      {infoCards.map(({ infoCard }, i) => {

        return (
          <li key={i}>
            <InfoCard
              infoCard={infoCard}
              accentTheme={accentTheme}
              className={cardClassName}
              index={i}
            />
          </li>
        );
      })}
    </ul>
  );
}

InfoCards.inputs = [
  {
    name: 'infoCards',
    type: 'list',
    defaultValue: [],
    subFields: InfoCard.inputs,
  },
];