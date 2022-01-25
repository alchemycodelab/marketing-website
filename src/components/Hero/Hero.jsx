import ImageTwoColumn from '../common/ImageTwoColumn';
import { Content } from '../content/Content';
import Image from '../common/Image';
import Section from '../common/Section';
import styles from './Hero.module.scss';


export default function Hero({
  content,
  image = {},
  ...rest
}) {

  return (
    <ImageTwoColumn 
      {...rest} 
      className={styles.Hero}
      enforceAspectRatio={true}
      split="half"
      image={image}
    >
      <div className={styles.contentContainer}>
        <Content content={content} isExpressive={true}/>
      </div>
    </ImageTwoColumn>
  );
}

Hero.config = {
  name: 'Hero',
  inputs: [
    ...Section.inputs,
    ...Image.inputs,
    ...Content.inputs
  ]
};
