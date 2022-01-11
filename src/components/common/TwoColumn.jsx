import React from 'react';
import Section from './Section';
import classNames from 'classnames';
import styles from './TwoColumn.module.scss';

export default function TwoColumn({
  imageUrl,
  className: parentClassName = '',
  split = 'auto',
  rightOnBottom = false,
  rightOnLeft = false,
  leftChildren,
  rightChildren,
  ...rest
}) {

  const className = classNames(
    parentClassName,
    styles.TwoColumn, 
    { 
      [styles.rightOnBottom]: rightOnBottom, 
      [styles.rightOnLeft]: rightOnLeft, 
      [styles.onlyGoldenSplit]: split === 'golden', 
      [styles.onlyHalfSplit]: split === 'half', 
    }
  );

  return (
    <Section {...rest} className={className}>

      {leftChildren}

      {rightChildren}

    </Section>
  );
}

TwoColumn.inputs = [
  ...Section.inputs,
  {
    name: 'split',
    friendlyName: 'Column Split',
    helperText: 'Two column split on wider devices: half, golden ratio, or responsive (both)',
    type: 'text',
    advanced: true,
    defaultValue: 'half',
    enum: [
      'half',
      'auto',
      'golden',
    ]
  }
];
