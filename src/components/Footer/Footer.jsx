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
        <a href="https://www.instagram.com/alchemycodelab/">
          <span>Instagram</span>
        </a>

        <a href="https://twitter.com/AlchemyCodeLab">
          <span>Twitter</span>
        </a>

        <a href="https://www.facebook.com/AlchemyCodeLab">
          <span>Facebook</span>
        </a>
      </section>

      <section className={classNames(styles.copyright)}>
        <p>© Copyright 2022, Alchemy Code Lab</p>

        <p className={styles.policy}>
          <a href="/privacy-policy">
            <span>Privacy Policy</span>
          </a>
          <a href="/cookie-policy">
            <span>Cookie Policy</span>
          </a>
        </p>
      </section>

    </Section>
  );
}
