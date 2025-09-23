import { Button } from '@/shared/components/Button';

// styles
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>
      <Button>Button</Button>
      <Button variant="danger">Button</Button>
      <Button variant="danger-out">Button</Button>
    </div>
  );
};

export default Dashboard;
