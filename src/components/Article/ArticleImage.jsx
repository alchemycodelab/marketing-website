import Section from '../common/Section';
import Image from '../common/Image';
import { SmallText } from '../content/Text';
import styles from './ArticleImage.module.scss';

export default function ArticleImage({ 
  image, 
  caption,
  height,
  ...rest 
}) {

  const heightStyle = height ? { height } : null;

  return (
    <Section {...rest} className={styles.ArticleImage}>
      <div className={styles.container} style={heightStyle}>
        <Image className={styles.Image} image={image} />
      </div>
      <SmallText className={styles.caption} text={caption} />
    </Section>
  );
}

ArticleImage.config = {
  name: 'ArticleImage',
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
    }
  ],
};
