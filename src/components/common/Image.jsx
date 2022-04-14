import styles from './Image.module.scss';

export default function Image({ image = {} , maxWidth = 0 }) {
  const { 
    alt, 
    fitHorizontal = 'center', 
    fitVertical = 'top',
  } = image;

  let { url } = image;

  if(maxWidth) {
    const split = '/image/upload/';
    const [lead, trail] = url.split(split);
    url = `${lead}${split}c_fill,w_${maxWidth}/${trail}`;
    console.log(url);
  }

  return (
    <img 
      className={styles.Image} 
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