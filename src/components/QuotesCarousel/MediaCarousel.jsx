import Carousel from './Carousel';
import { Title, Lead, RichText } from '../content/Text';
import Image from '../common/Image';
import classNames from 'classnames';
import { themes } from '../../styles/themes.js';
import styles from './MediaCarousel.module.scss';

export default function MediaCarousel({
  cardTheme,
  cards = [],
  ...props
}) {

  return (
    <Carousel {...props} items={cards}>
      {cards.map((card, i) => {
        const { image, header1, header2, text } = card;

        const className = classNames(
          styles.MediaCard, 
          // {
          //   [styles.noImage]: !hasImage
          // }
        );

        const contentClassName = classNames(
          styles.Content,
          cardTheme,
        )

        return (
          <li key={i} className={className}>
            <Image image={image}/>
            <div className={contentClassName}>
              <h3>
                {header1 && <Title text={header1} as="span"/>}
                {header2 && <Lead text={header2} as="span"/>}
              </h3>
              <RichText text={text}/>
            </div>
          </li>
        );

      })}

    </Carousel>
  );
}

const formatCaption = (title, company) => {
  return company ? `${title} at ${company}` : title;
};

MediaCarousel.config = {
  name: 'Media Carousel',
  inputs: [
    ...Carousel.inputs,
    {
      name: 'cardTheme',
      friendlyName: 'The theme to use behind the content',
      type: 'text',
      enum: themes,
    },
    {
      name: 'cards',
      type: 'list',
      defaultValue: [],
      subFields: [
        ...Image.inputs,
        {
          name: 'header1',
          type: 'text',
          defaultValue: 'Person Name',
        },
        {
          name: 'header2',
          type: 'text',
          defaultValue: 'Title',
        },
        {
          name: 'text',
          type: 'richText',
          defaultValue: 'Content for this card'
        },
      ],
    }
  ]
};
