import TwoColumn from './TwoColumn';
import Image from './Image';
import classNames from 'classnames';
import styles from './ImageTwoColumn.module.scss';

export default function ImageTwoColumn({
  children,
  className: parentClassName = '',
  image,
  enforceAspectRatio = false,
  ...rest
}) {

  const className = classNames(
    styles.ImageTwoColumn, 
    parentClassName,
    { [styles.enforceAspectRatio]: enforceAspectRatio }
  );

  return (
    <TwoColumn 
      {...rest} 
      className={className}
      leftChildren={children}
      rightChildren={<Image image={image} />}
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
