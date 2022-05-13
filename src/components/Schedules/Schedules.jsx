import Section from '../common/Section';
import TwoColumn from '../common/TwoColumn';
import Image from '../common/Image';
import { Content } from '../content/Content';
import InfoCards from '../content/InfoCards';
import HorizontalTabs from '../Tabs/HorizontalTabs.jsx';
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
      split="golden-reverse"
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

      <div className={styles.TabsContainer}>
        <HorizontalTabs tabs={schedules}/>
      </div>

      <div className={styles.SchedulesContainer} >
        {schedules.map(({ heading, infoCards }, i) => {
          const className = classNames(
            styles.ScheduleContainer,
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



