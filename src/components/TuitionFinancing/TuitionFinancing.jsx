import Section from '../common/Section';
import { Content, TertiaryContent } from '../content/Content';
import { Title } from '../content/Text';
import styles from './TuitionFinancing.module.scss';

export default function TuitionFinancing({ 
  content,
  title,
  sources = [],
  ...rest }) {

  return (
    <Section {...rest} className={styles.TuitionFinancing}>
      <div className={styles.contentContainer}>
        <Content content={content} />
      </div>
      <Title text={title}/>
      <ol className={styles.sources}>
        {sources.map((source, index) => <Source key={index} source={source}/>)}
      </ol>
    </Section>
  );
}

function Source({ source }) {
  return (
    <li className={styles.source}>
      <TertiaryContent content={source.content} />
    </li>
  );
}


TuitionFinancing.config = {
  name: 'Tuition Financing',
  inputs: [
    ...Section.inputs,
    ...Content.inputs,
    Title.input,
    {
      name: 'sources',
      type: 'list',
      defaultValue: [],
      subFields: [
        ...Content.inputs,
      ]
    },
  ]
};
