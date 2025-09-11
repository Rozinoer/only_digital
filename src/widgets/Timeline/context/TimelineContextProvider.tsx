import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { TimelineData } from 'shared/data/type';

type TTimelineContext = {
  data: TimelineData[number];
  changePage: (newPage: number) => void;
  page: number;
  totalPages: number;
  themes: string[];
  theme: string;
};

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

  const hangePage = (newPage: number) => {
    setPage(newPage);
  };

  const context: TTimelineContext = {
    themes: data.map((item) => item.theme),
    theme: data[page].theme,
    data: data[page],
    page: page,
    totalPages: data.length,
    changePage: hangePage,
  };

  return <TimelineContext.Provider value={context}>{children}</TimelineContext.Provider>;
};
