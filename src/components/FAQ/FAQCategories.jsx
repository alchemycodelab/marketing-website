import { getFAQs } from '../../builder/services';
import Section from '../common/Section';
import FAQs from './FAQs';
import styles from './FAQCategories.module.scss';
import HorizontalTabs from '../Tabs/HorizontalTabs';
import classNames from 'classnames';

export function FAQCatagories({ categories, ...rest }) {
  const tabs = categories.map(({ topic }) => ({ heading: topic }));
  const className = classNames(styles.FAQCategories, 'selection-script');

  return (
    <Section {...rest} className={className}>
      <div className={styles.TabsContainer}>
        <HorizontalTabs tabs={tabs} />
      </div>

      <div className={styles.FAQContainer}>
        {categories.map((category, i) => {
          const className = classNames(styles.FAQArea, 'target-script', { active: i === 0 });

          return (
            <div key={category.topic} className={className}>
              <FAQs category={category} />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const categories = await getFAQs();

export default function FAQCatagoriesContainer(props) {
  return <FAQCatagories categories={categories} {...props} />;
}

FAQCatagoriesContainer.config = {
  name: 'FAQ',
  inputs: [...Section.inputs],
};
