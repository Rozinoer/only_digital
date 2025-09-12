import { mockData } from 'shared/data/data';
import { Timeline, TimelinePeriod, TimelinePeriodInfo } from 'widgets/Timeline';

const MainPage = () => {
  return (
    <main className="app_container">
      <Timeline data={mockData}>
        <TimelinePeriod />
        <TimelinePeriodInfo />
      </Timeline>
     
    </main>
  );
};

export default MainPage;
