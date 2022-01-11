import Section from '../common/Section';
import TwoColumn from '../common/TwoColumn';
import Image from '../common/Image';
import Content from '../content/Content';
import InfoCards from '../content/InfoCards';
import { HeaderText } from '../content/Text';
import classNames from 'classnames';
import { themes } from '../../styles/themes.js';

import styles from './Schedules.module.scss';


export default function Schedules({
  content,
  schedules,
  images,
  accentTheme,
  theme,
  ...rest
}) {

  const className = classNames(
    styles.Schedules,
    'selection-script',
  );

  return (
    <TwoColumn
      theme={theme}
      {...rest}
      className={className}
      split="half"
      leftChildren={
        <Left
          content={content}
          schedules={schedules}
          theme={theme}
          accentTheme={accentTheme}
        />}
      rightChildren={
        <ImageViewer images={images} />
      }
    />
  );
}

function ImageViewer({ images = [] }) {
  return (
    <div className={styles.ImageViewer}>

      {images.map((image, i) => {
        const className = classNames(
          styles.imageContainer,
          'secondary-target-script',
          { active: i === 0 },
        );

        return (
          <div key={i} className={className}>
            <Image image={image} />
          </div>
        );
      })}

    </div>
  );
}

function Left({ content, schedules, theme, accentTheme }) {
  return (
    <div className={styles.leftContainer}>
      <Content content={content} className={styles.headerContent} />

      <div className={styles.tabContainer} >
        {schedules.map(({ heading }, i) => {
          const className = classNames(
            styles.Header,
            'trigger-script',
            { active: i === 0 }
          );

          return (
            <HeaderText
              key={heading}
              text={heading}
              className={className}
            />
          );

        })}
      </div>

      <div className={styles.schedulesContainer} >
        {schedules.map(({ heading, infoCards }, i) => {
          const className = classNames(
            styles.scheduleContainer,
            'target-script',
            'scroll-reset-script',
            { active: i === 0 }
          );

          return (
            <div key={heading} className={className}>
              <InfoCards
                infoCards={infoCards}
                accentTheme={accentTheme} />
            </div>
          );

        })}

        <div
          className={classNames(styles.fadeoutCurtain, styles.top)}
          style={{
            background: `linear-gradient(var(--${theme}) 25%, transparent 100%)`
          }}
        />

        <div
          className={classNames(styles.fadeoutCurtain, styles.bottom)}
          style={{
            background: `linear-gradient(transparent 0%, var(--${theme}) 65%)`
          }}
        />
      </div>


    </div>
  );
}



Schedules.config = {
  name: 'Schedules',
  inputs: [
    ...Section.inputs,
    ...Content.inputs,
    {
      name: 'accentTheme',
      type: 'text',
      enum: themes
    },
    {
      name: 'schedules',
      type: 'list',
      defaultValue: [],
      subFields: [
        {
          name: 'heading',
          type: 'longText',
          defaultValue: 'Schedule',
          required: true
        },
        ...InfoCards.inputs,
        // {
        //   name: 'images',
        //   type: 'list',
        //   defaultValue: [],
        //   subFields: [
        //     Image.config,
        //   ]
        // }
      ],
    }
  ]
};



