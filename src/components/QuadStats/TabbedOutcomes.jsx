import Section from '../common/Section';
import { Content } from '../content/Content';
import QuadStats from './QuadStats';
import HorizontalTabs from '../Tabs/HorizontalTabs.jsx';
import { RichContent } from '../content/Text';
import classNames from 'classnames';
import styles from './TabbedOutcomes.module.scss';


export default function TabbedOutcomes({
  content,
  outcomes = [],
  trailer,
  ...rest
}) {

  const className = classNames(styles.OutcomesContainer, 'selection-script');

  return (
    <Section {...rest} className={styles.TabbedOutcomes}>
      
      <Left content={content}/>
      
      <div className={className}>
        <div className={styles.TabsContainer}>
          <HorizontalTabs tabs={outcomes}/>
        </div>
        
        <div className={styles.OutcomeContainer}>
          {outcomes.map(({ heading, stats = [] }, i) => {
            const className = classNames(
              styles.StatsContainer,
              'target-script',
              'scroll-reset-script',
              { active: i === 0 }
            );

            return (
              <div key={heading} className={className}>
                <QuadStats stats={stats} />
              </div>
            );  
          })}
        </div>
        
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

TabbedOutcomes.config = {
  name: 'Tabbed Outcomes',
  inputs: [
    ...Section.inputs,
    ...Content.inputs,
    {
      ...RichContent.input,
      name: 'trailer',
      friendlyName: 'Text Trailer',
    },
    {
      name: 'outcomes',
      type: 'list',
      defaultValue: [],
      subFields: [
        {
          name: 'heading',
          type: 'text',
          defaultValue: 'Heading',
          require: true,
        },
        ...QuadStats.inputs,
      ]
    }, 
  ]
};
