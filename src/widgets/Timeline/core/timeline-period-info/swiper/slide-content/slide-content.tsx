import clsx from 'clsx';

import * as styles from './slide.module.scss';

export const SlideContent = ({ content }: { content: { title: number; description: string } }) => {
  return (
    <div className={clsx(styles['swiper-slide__content'])}>
      <h3>{content.title}</h3>
      <p>{content.description}</p>
    </div>
  );
};
