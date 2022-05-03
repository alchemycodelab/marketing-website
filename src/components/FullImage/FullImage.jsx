import Section from '../common/Section';
import Image from '../common/Image';
import { SmallText } from '../content/Text';
import styles from './FullImage.module.scss';

export default function FullImage({ 
  image, 
  caption,
  height = '30vw',
  ...rest 
}) {
  return (
    <Section {...rest} className={styles.FullImage}>
      <div className={styles.container} style={{ height }}>
        <Image className={styles.Image} image={image} />
      </div>
      <SmallText className={styles.caption} text={caption} />
    </Section>
  );
}

FullImage.config = {
  name: 'FullImage',
  inputs: [
    ...Section.inputs, 
    ...Image.inputs,
    {
      name: 'caption',
      type: 'text'
    },
    {
      name: 'height',
      type: 'text',
      advanced: true,
    },
  ],
};
