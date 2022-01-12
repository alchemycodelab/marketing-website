import Section from '../common/Section';
import Pages from '../common/Pages';
import styles from './Footer.module.scss';
import classNames from 'classnames';

export default function Footer({ pages, page: currentPage }) {

  return (
    <Section
      tag="footer"
      className={styles.Footer}
      theme="black"
    >
      <a href="/" className={classNames(styles.logo)}>
        <img
          src='/images/alchemy-logo-vertical.svg'
          alt="Alchemy Footer Logo"
          className={classNames(styles.logo)}
        />
      </a>

      <section className={classNames(styles.info, styles.links)} >
        <Pages
          navigation="secondary"
          pages={pages}
          currentPage={currentPage}
          linkClassName={styles.navlink}
        />
      </section>

      <section className={classNames(styles.social, styles.links)}>
        <a href="#instagram">
          <span>Instagram</span>
        </a>

        <a href="#twitter">
          <span>Twitter</span>
        </a>

        <a href="#facebook">
          <span>Facebook</span>
        </a>
      </section>

      <section className={classNames(styles.copyright)}>
        <p>© Copyright 2021, Alchemy Code Lab</p>

        <a href="#privacypolicy">
          <span>Privacy Policy</span>
        </a>
      </section>

    </Section>
  );
}
