// styles
import { Button } from '@/shared/components/Button';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <p>Dashboard</p>
      <Button variant="info">Button</Button>
      <Button variant="success">Button</Button>
      <Button variant="warning">Button</Button>
      <Button variant="danger">Button</Button>
      <Button variant="info-out">Button</Button>
      <Button variant="success-out">Button</Button>
      <Button variant="warning-out">Button</Button>
      <Button variant="danger-out">Button</Button>
    </div>
  );
};

export default Dashboard;
