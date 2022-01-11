import React from 'react';
import ImageTwoColumn from '../common/ImageTwoColumn';
import Content from '../content/Content';
import classNames from 'classnames';
import styles from './ImageContent.module.scss';

export default function ImageContent({
  content,
  image = {},
  heightMode = 'square',
  className: parentClassName = '',
  ...rest
}) {

  const className = classNames(
    styles.ImageContent, 
    parentClassName,
    { 
      [styles.squareHeight]: heightMode === 'square', 
    }
  );

  return (
    <ImageTwoColumn 
      {...rest} 
      className={className}
      enforceAspectRatio={heightMode === 'square'}
      image={image}
    >
      <div>
        <Content content={content} />
      </div>
    </ImageTwoColumn>
  );
}

ImageContent.config = {
  name: 'Image Content',
  inputs: [
    ...ImageTwoColumn.inputs,
    {
      name: 'heightMode',
      helperText: 'Size height based on square aspect ration or image height',
      type: 'text',
      defaultValue: 'square',
      enum: ['square', 'image']
    },
    ...Content.inputs,
  ]
};
