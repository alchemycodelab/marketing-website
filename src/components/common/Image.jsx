import styles from './Image.module.scss';
import classNames from 'classnames';

const isCloudinary = url => !!(url?.startsWith('https://res.cloudinary.com/alchemy-code-lab'));

export default function Image({ 
  image = {} , 
  maxWidth = 0,
  className = '', 
}) {
  const { 
    alt, 
    fitHorizontal = 'center', 
    fitVertical = 'top',
  } = image;

  let { url } = image;

  if(maxWidth && isCloudinary(url)) {
    const split = '/image/upload/';
    const [lead, trail] = url.split(split);
    url = `${lead}${split}c_fill,w_${maxWidth}/${trail}`;
  }

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