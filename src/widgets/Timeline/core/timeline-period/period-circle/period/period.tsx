import React from "react";
import * as styles from "./period.module.scss";

export const Period = ({
  period: [from, to],
}: {
  period: [number, number];
}) => {
  return (
    <div className={styles["period"]}>
      <span>{from}</span>
      <span>{to}</span>
    </div>
  );
};
