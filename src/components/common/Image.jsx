import styles from './Image.module.scss';

export default function Image({ image = {} }) {
  const { 
    url, 
    alt, 
    fitHorizontal = 'center', 
    fitVertical = 'top'
  } = image;

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