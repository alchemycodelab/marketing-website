import { useState, useEffect } from 'react';
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
        <HorizontalTabs tabs={tabs}/>
      </div>

      <div className={styles.FAQContainer}>
        {categories.map((category, i) => {
          const className = classNames(
            styles.FAQArea, 
            'target-script', 
            { active: i === 0 },
          );

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

async function getFAQs() {
  const url = 'https://cdn.builder.io/api/v2/content/faq?apiKey=b9c103cda0f24735921c917287d4fc23&limit=0&fields=data.category.value.name,data.question,data.answer&includeRefs=true';
  const response = await fetch(url);
  const { results } = await response.json();

  const categoryMap = new Map();
  for(let { data } of results) {
    const { question, answer, category } = data;
    const topic = category.value.name;
    const hasTopic = categoryMap.has(topic);

    const faqs = hasTopic ? categoryMap.get(topic) : [];
    faqs.push({ question, answer });
    if(!hasTopic) categoryMap.set(topic, faqs);
  }
  
  return [...categoryMap.entries()].map(([topic, faqs]) => ({ topic, faqs }));
}

export default function FAQCatagoriesContainer(props) {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    const fetchIt = async () => {
      const categories = await getFAQs(); 
      setCategories(categories);
      console.log(categories);
    };

    fetchIt();
  }, []);
  
  return <FAQCatagories categories={categories} {...props}/>;
}

FAQCatagoriesContainer.config = {
  name: 'FAQ',
  inputs: [
    ...Section.inputs,
  ]
};
