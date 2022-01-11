import Section from '../common/Section';
import ControlBar from './ControlBar';
import { Wayfinder, RichText } from '../content/Text';
import Image from '../common/Image';
import classNames from 'classnames';
import { themes } from '../../styles/themes.js';
import styles from './QuotesCarousel.module.scss';

export default function QuotesCarousel({
  wayfinder,
  theme,
  alternatingTheme = theme,
  quotes = [],
  ...rest
}) {
  return (
    <Section theme={theme} {...rest}
      tagClassName={classNames(styles.HorizontalScroll, 'carousel-script')}
      className={styles.QuotesCarousel}
    >
      <ControlBar wayfinder={wayfinder} quotes={quotes} />

      <ul className={styles.carousel}>

        {quotes.map((quote, i) => {

          const className = classNames({
            [alternatingTheme]: i % 2 === 0
          });

          const { text, image, name, title, company } = quote;

          return (
            <li key={i} className={className}>
              <blockquote className="blockquote">
                {text}
              </blockquote>

              <Image image={image} />

              <div className={styles.attribution}>
                <RichText text={name} />
                <RichText text={formatCaption(title, company)} className="black-65-text" />
              </div>
            </li>
          );

        })}

      </ul>
    </Section>
  );
}

const formatCaption = (title, company) => {
  return company ? `${title} at ${company}` : title;
};

QuotesCarousel.config = {
  name: 'Quotes Carousel',
  inputs: [
    ...Section.inputs,
    Wayfinder.input,
    {
      name: 'alternatingTheme',
      friendlyName: 'Alternating Quote Card Theme (optional)',
      type: 'text',
      enum: themes,
    },
    {
      name: 'quotes',
      type: 'list',
      defaultValue: [],
      subFields: [
        ...Image.inputs,
        {
          name: 'text',
          type: 'longText',
          defaultValue: 'Quote from this person...',
          required: true
        },
        {
          name: 'name',
          type: 'text',
          defaultValue: 'Person Name',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Title',
        },
        {
          name: 'company',
          type: 'text',
          defaultValue: 'Company',
        },
      ],
    }
  ]
};
