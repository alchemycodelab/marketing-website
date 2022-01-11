import { Fragment, cloneElement } from 'react';
import Section from '../common/Section';
import Content from '../content/Content';
import classNames from 'classnames';
import { themes } from '../../styles/themes.js';

import styles from './BaseAccordion.module.scss';

export default function BaseAccordion({
  tabThemes = {},
  contentClassName = '',
  content,
  items,
  children,
  ...rest
}) {

  const { activeTheme, accentTheme, textTheme } = tabThemes;

  return (
    <>
      <Section {...rest} className={styles.BaseAccordion}>

        <Content content={content} className={styles.HeaderContent} />

        <div
          className={classNames(styles.Container, 'selection-script')}
          style={{ gridTemplateRows: `repeat(${items.length + 1}, min-content)` }}
        >
          {items.map((item, i) => {
            const active = i === 0;

            return (
              <Fragment key={i}>

                <div className={classNames(
                  styles.Tab,
                  'trigger-script',
                  `${activeTheme}-active`,
                  { active }
                )}>
                  {cloneElement(children, { item, accentTheme, textTheme })}
                </div>

                <Content content={item.content}
                  className={classNames(
                    styles.Content,
                    contentClassName,
                    'target-script',
                    { active }
                  )}
                />

              </Fragment>
            );

          })}
        </div>
      </Section>
    </>
  );
}

BaseAccordion.getInputs = tabInputs => ([
  ...Section.inputs,
  ...Content.inputs,
  { 
    name: 'tabThemes',
    type: 'object',
    defaultValue: {},
    subFields: [
      {
        name: 'activeTheme',
        type: 'text',
        enum: themes
      },
      {
        name: 'accentTheme',
        type: 'text',
        enum: themes
      },
      {
        name: 'textTheme',
        type: 'text',
        enum: themes
      },
    ]
  },
  {
    name: 'items',
    type: 'list',
    defaultValue: [],
    subFields: [
      ...tabInputs,
      ...Content.inputs,
    ],
  }
]);