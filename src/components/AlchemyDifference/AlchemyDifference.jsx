import styles from './AlchemyDifference.module.scss';
import ImageTwoColumn from '../common/ImageTwoColumn';
import { Content } from '../content/Content';
import { HeaderText, RichContent } from '../content/Text';
import classNames from 'classnames';

export default function AlchemyDifference({
  content,
  differences,
  ...rest
}) {
  return (
    <ImageTwoColumn {...rest}>

      <div className={styles.AlchemyDifference}>

        <Content content={content} />

        <ul className="selection-script">
          {differences.map(({ heading, text }, i) => (
            <Difference
              key={i}
              heading={heading}
              text={text}
              isActive={i === 0}
            />
          ))}
        </ul>

      </div>

    </ImageTwoColumn>
  );
}

function Difference({ heading, text, isActive }) {
  return (
    <li className={classNames('trigger-script', 'target-script', { active: isActive })}>
      <HeaderText text={heading} />
      <RichContent text={text} />
    </li>
  );
}

AlchemyDifference.config = {
  name: 'Alchemy Difference',
  inputs: [
    ...ImageTwoColumn.inputs,
    ...Content.inputs,
    {
      name: 'differences',
      type: 'list',
      defaultValue: [],
      subFields: [
        {
          name: 'heading',
          type: 'longText',
          defaultValue: 'Difference Heading',
          required: true
        },
        {
          ...RichContent.input,
          defaultValue: 'Text describing difference',
          required: true
        },
      ],
    }
  ]
};



