import { Wayfinder, HeaderText, RichContent, RichText } from './Text';
import classNames from 'classnames';
import styles from './InfoCard.module.scss';

export default function InfoCard({
  infoCard,
  accentTheme,
  className: customClassName = '',
}) {

  const { eyebrow, heading, stat, text, footer } = infoCard;

  const className = classNames(styles.InfoCard, customClassName);
  const eyebrowClassName = classNames(styles.eyebrow, `${accentTheme}-text`);
  const footerClassName = classNames(styles.footer, 'accent-text');

  return (
    <div className={className}>
      {eyebrow && <Wayfinder text={eyebrow} as="p" className={eyebrowClassName} />}
      {heading && <HeaderText text={heading} as="h4" className={styles.heading} />}
      {stat && <Wayfinder text={stat} as="span" className={styles.stat} />}
      {text && <RichContent text={text} className={styles.text} />}
      {footer && <RichText text={footer} className={footerClassName} />}
    </div>
  );

}

InfoCard.inputs = [
  {
    name: 'infoCard',
    type: 'object',
    defaultValue: {},
    subFields: [
      {
        ...Wayfinder.inputs,
        name: 'eyebrow',
      },
      
      HeaderText.input,
      {
        ...Wayfinder.inputs,
        name: 'stat',
      },
      RichContent.input,
    ]
  },
];