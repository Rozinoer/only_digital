import clsx from "clsx";
import * as styles from "./slide.module.scss";

export const SlideContent = ({
  content,
  isNext,
}: {
  content: { title: number; description: string };
  isNext: boolean;
}) => {
  return (
    <div
      className={clsx(styles["swiper-slide__content"], isNext && "disabled")}
      style={{ opacity: isNext ? 0.5 : 1 }}
    >
      <h3>{content.title}</h3>
      <p>{content.description}</p>
    </div>
  );
};
