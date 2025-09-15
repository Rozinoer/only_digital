import { TimelineData } from 'shared/data/type';

export type TTimelineContext = {
  data: TimelineData[number];
  page: number;
  totalPages: number;
  themes: string[];
  theme: string;
  circleRotation: number;
  positions: number[];
  circleRef: React.RefObject<HTMLDivElement>;
  isChangeComplete: boolean;
  changePage: (id: number) => void;
};
