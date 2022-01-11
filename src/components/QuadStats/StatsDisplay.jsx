import React from 'react';
import TwoColumn from '../common/TwoColumn';
import Section from '../common/Section';
import Content from '../content/Content';
import QuadStats from './QuadStats';
import { StatCaption } from '../content/Text';
import classNames from 'classnames';
import styles from './StatsDisplay.module.scss';


export default function StatsDisplay({
  content,
  stats,
  ...rest
}) {

  return (
    <TwoColumn {...rest}
      className={styles.StatsDisplay}
      rightOnBottom={true}
      leftChildren={<Left content={content} />}
      rightChildren={<QuadStats stats={stats} />}
    />
  );
}

function Left({ content }) {
  return (
    <div className={styles.LeftContent}>
      <Content content={content} /> 
    </div>
  );
}

StatsDisplay.config = {
  name: 'Quad Stats',
  inputs: [
    ...Section.inputs,
    ...Content.inputs,
    ...QuadStats.inputs,
  ]
};
