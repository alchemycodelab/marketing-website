import Section from '../common/Section';
import FAQs from './FAQs';
import styles from './FAQCategories.module.scss';
import HorizontalTabs from '../Tabs/HorizontalTabs';
import classNames from 'classnames';

export default function FAQCategories({ categories, ...rest }) {
  return (
    <Section {...rest} className={classNames(styles.FAQCategories, 'toggle-script')}>
      <HorizontalTabs
        tabs={categories.map((category) => ({
          heading: category.topic,
        }))}
      />
      <div className={styles.FAQContainer}>
        {categories.map((category, i) => {
          const className = classNames(styles.FAQArea, 'target-script', {
            active: i === 0,
          });
          return (
            <div className={className}>
              <FAQs faqs={category} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}
