import TwoColumn from './TwoColumn';
import Image from './Image';
import classNames from 'classnames';
import styles from './ImageTwoColumn.module.scss';

const goldenWidth = 890;
const widths = {
  golden: goldenWidth,
  auto: goldenWidth,
  'golden-reverse': (1440 - goldenWidth)
};

export default function ImageTwoColumn({
  children,
  className: parentClassName = '',
  image,
  enforceAspectRatio = false,
  split,
  ...rest
}) {

  const className = classNames(
    styles.ImageTwoColumn, 
    parentClassName,
    { [styles.enforceAspectRatio]: enforceAspectRatio }
  );

  const maxWidth = widths[split] || 720;
  
  return (
    <TwoColumn 
      split={split}
      {...rest} 
      className={className}
      leftChildren={children}
      rightChildren={<Image image={image} maxWidth={maxWidth}/>}
    />
  );
}

ImageTwoColumn.inputs = [
  ...TwoColumn.inputs,
  ...Image.inputs,
  {
    name: 'rightOnLeft',
    friendlyName: 'Image on left',
    helperText: 'Show the image on the right side in two-column views',
    type: 'boolean',
    defaultValue: false
  },
  {
    name: 'rightOnBottom',
    friendlyName: 'Image on Bottom',
    helperText: 'Position the image on the bottom in mobile/narrow view',
    type: 'boolean',
    defaultValue: false
  },
];
