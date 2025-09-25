import { Button } from '@/interface/components/Button';

// styles
import styles from './Dashboard.module.scss';
import useDelete from '@/modules/todos/hooks/useDelete';
import useCompleteRide from '@/modules/todos/hooks/useCategories';

const Dashboard = () => {
  const { mutate: deleteRide } = useDelete();
  const { mutate } = useCompleteRide();

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      <Button onClick={() => deleteRide({ rideId: 634 })}>Delete Ride</Button>
      <Button onClick={() => mutate()}>Complate Ride</Button>
    </div>
  );
};

export default Dashboard;
