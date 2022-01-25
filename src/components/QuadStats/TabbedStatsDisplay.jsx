import React from 'react';
import Section from '../common/Section';
import { Content } from '../content/Content';
import QuadStats from './QuadStats';
import { RichContent } from '../content/Text';
import styles from './TabbedStatsDisplay.module.scss';


export default function TabbedStatsDisplay({
  content,
  stats,
  trailer,
  ...rest
}) {

  return (
    <Section {...rest} className={styles.TabbedStatsDisplay}>
      
      <Left content={content}/>
      
      <div className={styles.Stats}>
        <QuadStats stats={stats} />
      </div>
      
      <div className={styles.Trailer}>
        <RichContent text={trailer} />
      </div>

    </Section>
  );
}


function Left({ content }) {
  return (
    <div className={styles.Content}>
      <Content content={content} /> 
    </div>
  );
}

TabbedStatsDisplay.config = {
  name: 'Quad Stats',
  inputs: [
    ...Section.inputs,
    ...Content.inputs,

  ]
};
