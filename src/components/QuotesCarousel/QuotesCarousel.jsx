import Carousel from './Carousel';
import Image from '../common/Image';
import Quote from '../content/Quote';
import Attribution from '../content/Attribution';
import classNames from 'classnames';
import { themes } from '../../styles/themes.js';
import styles from './QuotesCarousel.module.scss';

export default function QuotesCarousel({
  quotes = [],
  alternatingTheme,
  ...props
}) {
  return (
    <Carousel {...props} items={quotes} hasRightPadding={true}>

      {quotes.map((quote, i) => {
        
        const { text, image, name, title, company } = quote;
        const hasImage = !!(image?.url);
        
        const className = classNames(
          styles.QuoteCard, 
          {
            [alternatingTheme]: i % 2 === 0,
            [styles.noImage]: !hasImage
          }
        );

        return (
          <li key={i} className={className}>
            <Quote className={styles.Quote} text={text}/>

            {hasImage && <Image image={image} maxWidth={270}/>}

            <Attribution 
              className={styles.Attribution}
              name={name}
              title={title}
              company={company} 
            />
          </li>
        );

      })}

    </Carousel>
  );
}

const formatCaption = (title, company) => {
  return company ? `${title} at ${company}` : title;
};

QuotesCarousel.config = {
  name: 'Quotes Carousel',
  inputs: [
    ...Carousel.inputs,
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
        ...Quote.inputs,
        ...Attribution.inputs,
      ],
    }
  ]
};
