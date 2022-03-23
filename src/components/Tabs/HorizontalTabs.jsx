import { HeaderText } from '../content/Text';
import classNames from 'classnames';
import styles from './HorizontalTabs.module.scss';

export default function HorizontalTabs({ tabs }) {
  return (
    <div className={styles.HorizontalTabs}>
      {tabs.map(({ heading }, i) => {
        const className = classNames(styles.Header, 'trigger-script', { active: i === 0 });

        return <HeaderText key={heading} text={heading} className={className} />;
      })}
    </div>
  );
}
