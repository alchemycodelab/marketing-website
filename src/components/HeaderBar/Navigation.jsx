import Pages from '../common/Pages';
import styles from './Navigation.module.scss';
import classNames from 'classnames';

export default function Navigation({ pages, currentPage }) {

  return (
    <nav className={styles.Navigation}>
      <span className={styles.margin}></span>

      <Pages
        navigation="primary"
        pages={pages}
        currentPage={currentPage}
        linkClassName={classNames(
          styles.navlink,
          'small',
          'bold'
        )}
      >
        <span className={styles.filler}></span>
      </Pages>

      <span className={styles.margin}></span>
    </nav>


  );
}