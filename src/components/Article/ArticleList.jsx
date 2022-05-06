import classNames from 'classnames';
import Section from '../common/Section';
import { SmallText, Headline, RichText } from '../content/Text';
import { getArticles } from '../../builder/services';
import { timestampToShortDate, sizeImageUrl } from '../format.js';
import styles from './ArticleList.module.scss';

const THEMES = ['blue', 'peach', 'gold'];

export function ArticleList({ 
  articles = [],
  ...rest }) {

  return (
    <div className={styles.Articles}>
      <Section theme="white">
        {/* <header className={styles.Header}>
          <h1>Intro!</h1>
        </header> */}

        <ul className={styles.ArticleList}>
          {articles.map((article, index) => {
            const { url, imageUrl, description, title, timestamp } = article;
            const date = timestampToShortDate(timestamp);
            const background = imageUrl ?
              { backgroundImage: `url(${sizeImageUrl(imageUrl, 550)})` }
              : null;
            const theme = !imageUrl ? THEMES[index % THEMES.length] : null;
            
            const className = classNames(
              styles.ArticleItem,
              { [styles.AltBackground]: index % 2 === 1 }
            );

            return (
              <li key={url}>
                <a 
                  className={className}
                  href={`/blog/${url}`}
                >
                  <div className={styles.Content}>
                    <Headline 
                      size="tertiary"
                      style="expressive"
                      text={title}
                      as="h3"
                    />
                    {date && <SmallText text={date} className="text-accent"/>}
                    {description && <RichText text={description} className={styles.Description}/>}
                  </div>
                  <div 
                    className={classNames(styles.Preview, theme)}
                    style={background}
                  >
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Section>

    </div>
  );
}



const articles = await getArticles();

export default function ArticleListContainer(props) {
  return <ArticleList articles={articles} {...props}/>;
}

ArticleListContainer.config = {
  name: 'ArticleList',
  inputs: [
    ...Section.inputs,
  ]
};
