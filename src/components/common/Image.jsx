import classNames from 'classnames';
import { sizeImageUrl } from '../format.js';
import styles from './Image.module.scss';

export default function Image({ 
  image = {}, 
  maxWidth = 0,
  className = '', 
}) {
  const { 
    alt, 
    fitHorizontal = 'center', 
    fitVertical = 'top',
  } = image;

  const url = sizeImageUrl(image.url, maxWidth);

  return (
    <img 
      className={classNames(styles.Image, className)} 
      src={url} 
      alt={alt} 
      style={{
        objectPosition: `${fitHorizontal} ${fitVertical}`
      }}
    />
  );
}

Image.inputs = [
  {
    name: 'image',
    type: 'object',
    defaultValue: {},
    subFields: [
      {
        name: 'url',
        type: 'url',
        required: true,
      },
      {
        name: 'alt',
        type: 'longText',
        required: true,
      },
      {
        name: 'fitHorizontal',
        type: 'text',
        advanced: true,
        defaultValue: 'center'
      },
      {
        name: 'fitVertical',
        type: 'text',
        advanced: true,
        defaultValue: 'top'
      },
    ]
  },
];