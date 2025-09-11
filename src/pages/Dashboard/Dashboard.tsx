// import { Image } from '@mantine/core';
// import img from '../../assets/images/img6.png';

// styles
import { Button } from '@/shared/components/Button';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <p>Dashboard</p>
      <Button variant="filled">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="primary-out">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="secondary-out">Button</Button>
      <Button variant="white">Button</Button>
      <Button variant="light">Button</Button>
      <Button variant="subtle">Button</Button>
      <Button variant="link">Button</Button>
      <Button variant="text">Button</Button>
    </div>
  );
};

export default Dashboard;
