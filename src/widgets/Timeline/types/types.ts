import { useTimelineContext } from "widgets/Timeline/context/TimelineContextProvider";

export type TCircleProps = Pick<ReturnType<typeof useTimelineContext>, 'themes' | 'changePage'>;