type EventItem = {
  title: number;
  description: string;
};

type PeriodItem = {
  period: [number, number];
  theme: string;
  events: EventItem[];
};

export type TimelineData = PeriodItem[];
