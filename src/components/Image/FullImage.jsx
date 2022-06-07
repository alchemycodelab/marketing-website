import Section from '../common/Section';
import Image from '../common/Image';
import styles from './FullImage.module.scss';

export default function FullImage({ 
  image, 
  height,
  ...rest 
}) {

  const heightStyle = height ? { height } : null;

  return (
    <Section {...rest} className={styles.FullImage}>
      <div className={styles.container} style={heightStyle}>
        <Image className={styles.Image} image={image} />
      </div>
    </Section>
  );
}

FullImage.config = {
  name: 'FullImage',
  inputs: [
    ...Section.inputs, 
    ...Image.inputs,
    {
      name: 'height',
      type: 'text',
      advanced: true,
    }
  ],
};
