import styles from './QuadStats.module.scss';
import { StatCaption } from '../content/Text';
import classNames from 'classnames';

const THEMES = [
  'peach',
  'blue-medium-with-dark',
  'gold',
  'pink-dark',
];

export default function QuadStats({ stats }) {
  return (
    <ul className={styles.QuadStats}>
      {stats.map(({ stat, caption }, i) => (
        <li key={i} className={classNames(THEMES[i], styles.StatCard)}>
          {/* TODO: move this to content/Text: */}
          <p className={styles.Stat}>{stat}</p>
          <StatCaption text={caption} />
        </li>
      ))}
    </ul>
  );
}

QuadStats.inputs = [
  {
    name: 'stats',
    type: 'list',
    defaultValue: [{}, {}, {}, {}],
    subFields: [
      {
        name: 'stat',
        type: 'text',
        defaultValue: '100',
        required: true,
      },
      {
        name: 'caption',
        type: StatCaption.type,
        defaultValue: 'Explain the stat...',
      },
    ]
  },
];
