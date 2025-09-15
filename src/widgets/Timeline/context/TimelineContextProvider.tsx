import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { TimelineData } from 'shared/data/type';
import { TTimelineContext } from 'widgets/Timeline/context/type';
import { useCircleState } from 'widgets/Timeline/hooks/useCircleState';

const TimelineContext = createContext<TTimelineContext | null>(null);

export const useTimelineContext = () => {
  const context = useContext(TimelineContext);

  if (!context) {
    throw new Error('useTimelineData must be used within a TimelineContextProvider');
  }

  return context;
};

export const TimelineContextProvider = ({
  children,
  data,
}: PropsWithChildren<{ data: TimelineData }>) => {
  const [page, setPage] = useState(0);
  const [isChangeComplete, setChangeComplete] = useState(true);

  const { circleRotation, positions, onRotate, circleRef } = useCircleState({
    dots: data.length,
    setPage,
    setChangeComplete,
  });

  const context: TTimelineContext = {
    themes: data.map((item) => item.theme),
    theme: data[page].theme,
    data: data[page],
    page: page,
    totalPages: data.length,
    circleRotation,
    positions,
    circleRef,
    isChangeComplete,
    changePage: onRotate,
  };

  return <TimelineContext.Provider value={context}>{children}</TimelineContext.Provider>;
};
