import { PropsWithChildren, createContext, useContext, useId, useState } from 'react';
import { TimelineData } from 'shared/data/type';

type TTimelineContext = {
  data: TimelineData[number];
  changePage: (newPage: number) => void;
  page: number;
  totalPages: number;
  themes: string[];
  theme: string;
  isChangeComplete: boolean;
  setChangeComplete: React.Dispatch<React.SetStateAction<boolean>>;
  contextId: ReturnType<typeof useId>;
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
  const contextId = useId();
  const [page, setPage] = useState(0);
  const [isChangeComplete, setChangeComplete] = useState(true);

  const changePage = (newPage: number) => {
    setPage(newPage);
  };

  const context: TTimelineContext = {
    themes: data.map((item) => item.theme),
    theme: data[page].theme,
    data: data[page],
    page: page,
    changePage: changePage,
    totalPages: data.length,
    isChangeComplete,
    setChangeComplete,
    contextId,
  };

  return <TimelineContext.Provider value={context}>{children}</TimelineContext.Provider>;
};
