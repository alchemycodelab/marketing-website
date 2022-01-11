import Pages from '../common/Pages';
import classNames from 'classnames';
import styles from './SlideOut.module.scss';

export default function SlideOut({ pages, currentPage }) {
  const className = classNames(
    styles.SlideOut,
    'black',
    'target-script'
  );

  const getPages = navigation => (
    <div>
      <Pages
        navigation={navigation}
        pages={pages}
        currentPage={currentPage}
        linkClassName={styles.navlink}
      />
    </div>
  );

  return (
    <nav className={className}>
      {getPages('primary')}
      {getPages('secondary')}
    </nav>
  );
}
