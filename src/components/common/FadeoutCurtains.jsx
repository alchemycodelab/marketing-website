import classNames from 'classnames';
import styles from './FadeoutCurtains.module.scss';

export default function Employers({
  theme,
  className,
}) {
  
  return (
    <>
      <div
        className={classNames(styles.FadeoutCurtain, styles.Top, className)}
        style={{
          background: `linear-gradient(var(--${theme}) 25%, transparent 100%)`
        }}
      />
      <div
        className={classNames(styles.FadeoutCurtain, styles.Bottom, className)}
        style={{
          background: `linear-gradient(transparent 0%, var(--${theme}) 65%)`
        }}
      />
    </>
  );
}
