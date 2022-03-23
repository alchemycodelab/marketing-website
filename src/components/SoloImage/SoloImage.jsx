import Image from "../common/Image";
import Section from "../common/Section";

export default function SoloImage({ image, ...rest }) {
  return (
    <div>
      <Section {...rest}>
        <Image image={image} />
      </Section>
    </div>
  );
}
