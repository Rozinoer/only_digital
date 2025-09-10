import { PropsWithChildren } from "react";

import * as styles from "./timeline.module.scss";
import { TimelineContextProvider } from "widgets/Timeline/context/TimelineContextProvider";
import { TimelineData } from "shared/data/type";

export const Timeline = ({
  children,
  data,
}: PropsWithChildren<{ data: TimelineData }>) => {
  return (
    <section className={styles["timeline"]}>
      <TimelineContextProvider data={data}>{children}</TimelineContextProvider>
    </section>
  );
};
