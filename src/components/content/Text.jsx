import { isEmpty, paragraphToLineBreak } from '../format';
import classNames from 'classnames';
import styles from './Text.module.scss';

export function Wayfinder({ text, as: Tag = 'div', className: customClass = '' }) {
  const className = classNames(styles.Wayfinder, styles.SmallText, customClass);
  return <Tag className={className}>{text}</Tag>;
}

Wayfinder.className = styles.Wayfinder;
Wayfinder.input = {
  name: 'wayfinder',
  type: 'text',
  defaultValue: 'wayfinder text',
};

export const PrimaryExpressiveHeader = getRichText('PrimaryExpressiveHeader', 'Headline');
export const SecondaryInformativeHeader = getRichText('SecondaryInformativeHeader', 'Headline');
export const Lead = getRichText('Lead');
export const Title = getRichText('Title');
export const IllustrationCaption = getRichText('IllustrationCaption', 'Caption');
export const StatCaption = getRichText('StatCaption', 'Caption');
export const RichText = getRichText('RichText', 'text');
export const HeaderText = getRichText('HeaderText', 'heading', 'h3');
export const SmallText = getRichText('SmallText', 'text');
export const StrongSmallText = getRichText('StrongSmallText', 'text');

function getRichText(baseClass, propName, BaseTag = 'p') {

  const RichText = ({ text, className: customClass, as: Tag = BaseTag }) => {
    // include the friendly class so consuming components
    // can customize the styles by targeting it
    // TODO: reconsider whether is this a good idea?
    const className = classNames(
      baseClass, 
      customClass, 
      { [styles[baseClass]]: styles[baseClass] }
    );

    return (
      <Tag
        className={className}
        dangerouslySetInnerHTML={{ __html: paragraphToLineBreak(text) }}
      />
    );
  };

  const name = (propName || baseClass).replace(/\s/g, '');

  RichText.input = {
    name: name[0].toLowerCase() + name.slice(1),
    type: 'richText',
    defaultValue: propName ? propName[0].toUpperCase() + propName.slice(1) : '',
  };

  return RichText;
}

const SIZE = {
  jumbo: styles.Jumbo,
  primary: styles.Primary,
  secondary: styles.Secondary,
  tertiary: styles.Tertiary
};
const sizeDefault = styles.Secondary;

const STYLE = {
  expressive: styles.ExpressiveHeader,
  informative: styles.InformativeHeader,
};

const Header = getRichText(null, 'Headline');

export function Headline({ size, style, isSoft, className: customClassName, ...props }) {
  const fontSize = SIZE[size] || sizeDefault;
  const fontStyle = STYLE[style] || ((size === 'primary' || size === 'jumbo') ? STYLE.expressive : STYLE.informative)
  
  const className = classNames(
    customClassName,
    fontSize,
    fontStyle, 
    { [styles.Soft]: isSoft }
  );

  return <Header className={className} {...props} />;
}

Headline.input = {
  name: 'headline',
  type: 'richText'
};

export function RichContent({ text, className = '' }) {
  if(isEmpty(text)) return null;
  
  return (
    <div
      className={(classNames(styles.TextContent, className))}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
}

RichContent.input = {
  name: 'text',
  friendlyName: 'Text Content',
  type: 'richText',
};

