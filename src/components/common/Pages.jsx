import { Fragment, cloneElement } from 'react';
import classNames from 'classnames';
import styles from './Pages.module.scss';

export default function Pages({
  pages,
  navigation,
  currentPage,
  linkClassName = '',
  children,
}) {

  if (!pages) return null;

  return (
    <>
      {pages
        .filter(page => page.navigation === navigation)
        .map(({ url, title, navigation }) => {
          const className = classNames(
            styles.Page,
            navigation,
            { current: url === currentPage?.data?.url },
            linkClassName,
          );

          return (
            <Fragment key={url}>
              <a href={url} className={className}>
                {title}
              </a>
              {children && cloneElement(children)}
            </Fragment>
          );

        })
      }
    </>
  );
}