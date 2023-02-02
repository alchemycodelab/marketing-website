import Section from '../common/Section';
import Navigation from './Navigation';
import SlideOut from './SlideOut';
import styles from './HeaderBar.module.scss';
import classNames from 'classnames';

export default function HeaderBar({ pages, page }) {
  return (
    <Section
      tag="header"
      tagClassName={classNames(styles.StickyHeader, 'toggle-script')}
      className={classNames(styles.HeaderBar, 'escape-script')}
      theme="black"
    >
      <Curtain />

      <a href="/" className={styles.logo}>
        <img
          className={styles.logo}
          src="/images/alchemy-logo-primary.svg"
          alt="Alchemy Logo"
        />
      </a>

      {/* <div className={classNames(styles.navigation, 'target-script')}>
        <Navigation pages={pages} currentPage={page} />
      </div> */}

      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      {/* <a href="https://office.alchemycodelab.com/apply.html"
        target="_blank" 
        className={classNames(styles.apply, 'cta', 'gold')}
      >
        <span>Apply</span>!
      </a> */}

      {/* Not sure why "menu-button" id here */}
      {/* <button id="menu-button" className={classNames(styles.menu, 'black', 'trigger-script')}>
        <span></span>
        <SlideOut pages={pages} currentPage={page} />
      </button> */}
    </Section>
  );
}

function Curtain() {
  const className = classNames(styles.curtain, 'escape-script');

  return <div className={className}></div>;
}
