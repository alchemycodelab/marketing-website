import QuotesCarousel from './QuotesCarousel';
import { Content } from '../content/Content';
import classNames from 'classnames';
import { themes } from '../../styles/themes.js';
import styles from './FramedQuotesCarousel.module.scss';

export default function FramedQuotesCarousel({ 
  content,
  quotesCarousel, 
  theme,
  overlayTheme = 'peach',
  ...rest 
}) {

  return (
    <>
      <section className={classNames(styles.FramedQuotesCarousel)}>
        <div className={classNames(styles.contentContainer, theme)}>
          <div className={styles.contentWidth}>
            <Content content={content} />
          </div>
        </div>
        <div className={styles.carouselContainer}>
          <QuotesCarousel {...quotesCarousel} />
        </div>
        <div className={classNames(styles.themeFill, theme)} />
        <div className={classNames(styles.overlayTheme, overlayTheme)} />
      </section>
    </>
  );

}

FramedQuotesCarousel.config = {
  name: 'Framed Quotes Carousel',
  inputs: [
    {
      name: 'theme',
      type: 'text',
      defaultValue: 'pink',
      enum: themes
    },
    {
      name: 'overlayTheme',
      type: 'text',
      defaultValue: 'peach',
      enum: themes
    },
    ...Content.inputs,
    {
      name: 'quotesCarousel',
      type: 'object',
      defaultValue: {},
      subFields: QuotesCarousel.config.inputs,
    }
  ]
};