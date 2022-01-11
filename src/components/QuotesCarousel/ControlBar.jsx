import { Wayfinder } from '../content/Text';
import classNames from 'classnames';
import styles from './ControlBar.module.scss';

const makeWayfinderId = wayfinder => wayfinder?.replace(/\s/g, '-');

export default function ControlBar({ wayfinder, quotes }) {
  const wayfinderId = makeWayfinderId(wayfinder);

  return (
    <header className={styles.ControlBar}>
      <Wayfinder text={wayfinder} className="text-accent" />

      <div className={classNames(styles.selector, Wayfinder.className)}>

        {quotes.map((_, i) => {
          const id = `${wayfinderId}-${i}`;
          return (
            <span key={i}>
              <input id={id}
                defaultChecked={i === 0}
                type="radio"
                disabled
                value={i}
                name={`${wayfinderId}-quote-card-index`}
              />
              <label htmlFor={id}
                className={classNames({ [styles.active]: i === 0 })}
              />
            </span>
          );
        })}

      </div>
    </header>
  );
}
