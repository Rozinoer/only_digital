import clsx from "clsx";

import ArrowIcon from "shared/svg/ArrowIcon";
import * as styles from "./pagination-btn.module.scss";
import { HTMLAttributes } from "react";

interface SwiperButtonProps {
  direction?: "left" | "right";
  className?: string;
  variant?: "swiper" | "default";
}

export const PaginationButton = ({
  direction = "right",
  className,
  variant = "default",
  ...rest
}: SwiperButtonProps & HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className={clsx(
        styles["pagination-button"],
        styles[`pagination-button--${variant}`],
        className
      )}
    >
      <ArrowIcon
        direction={direction}
        className={styles["pagination-button__icon"]}
      />
    </button>
  );
};
